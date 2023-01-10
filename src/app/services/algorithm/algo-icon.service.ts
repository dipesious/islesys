import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, scan, take, tap } from 'rxjs';
import {  } from "rxjs/operators";

import { 
  Firestore, collectionData, collection, setDoc, doc, addDoc, limitToLast, orderBy, query, where, limit, updateDoc, docData, Timestamp, serverTimestamp, startAfter, 
  collectionGroup,
  DocumentData,
  onSnapshot,
  Query,
  DocumentReference,
  collectionSnapshots
 } from '@angular/fire/firestore';
import { ResourceService } from '../resource.service';

interface QueryConfig {
  path: string, //  path to collection
  field: string, // field to orderBy
  limit: number, // limit per query
  reverse: boolean, // reverse order?
  prepend: boolean // prepend to source?
}

@Injectable({
  providedIn: 'root'
})
export class AlgoIconService {


  // Source data
  private _done = new BehaviorSubject(false);
  private _loading = new BehaviorSubject(false);
  private _data = new BehaviorSubject([]);

  private query!: QueryConfig;

  // Observable data
  done: Observable<boolean> = this._done.asObservable();
  loading: Observable<boolean> = this._loading.asObservable();
  dataO: Observable<any> = of();

  firstHit = false;

  fillX = "";
  toneX = "";

  constructor(
    private resource:ResourceService,
    private fs: Firestore
    ) { }

  // Initial query sets options and defines the Observable
  // passing opts will override the defaults

  init(path: string, field: string, opts?: any) {
    console.log("MAN")

    //this.firstHit = true;
    this._done.next(false);
    this._loading.next(false);
    this._data.next([]);

    this.done = this._done.asObservable();
    this.loading = this._loading.asObservable();
    this.dataO = of();

    this.query = { 
      path,
      field,
      limit: 10,
      reverse: false,
      prepend: false,
      ...opts
    }
    const c = collection(this.fs, this.query.path);
    const first = query(c, 
      where("active", "==", true),
      where("fill", "==", this.fillX),
      where("tone", "==", this.toneX),
      orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc'), 
      limit(this.query.limit)
    );
    //const first =  collectionData(qu);
    this.mapAndUpdate(first)

    // Create the observable array for consumption in components
    this.dataO = this._data.asObservable().pipe(
        scan( (acc, val) => { 
          //console.log(acc, val)
          return this.query.prepend ? val.concat(acc) : acc.concat(val)
        })
    )
  }

 
  // Retrieves additional data from firestore
  more() {
    const cursor = this.getCursor()
    //console.log(cursor)
if(cursor){
  console.log("Fired")

    const c = collection(this.fs, this.query.path);
    const more = query(c, 
      where("active", "==", true),
      where("fill", "==", this.fillX),
      where("tone", "==", this.toneX),
      orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc'), 
      limit(this.query.limit),
      startAfter(cursor)
    );
    this.mapAndUpdate(more)
}

  }


  // Determines the doc snapshot to paginate query 
  private getCursor() {
    const current:any = this._data?.value;
    //console.log("current ", current.length, this.query.prepend)
    const checkLink = this.resource.router.url;
    //console.log("checkLink", checkLink)
    if (
      current.length && checkLink == '/icons' ||
      current.length && checkLink == '/outline-icons' ||
      current.length && checkLink == '/filled-icons' ||
      current.length && checkLink == '/duotone-icons' ||
      current.length && checkLink == '/vibrant-icons' ||
      current.length && checkLink == '/animated-icons' ||
      current.length && checkLink == '/flags-and-seals' ||
      false
    ) {
      //console.log("current ", this.query.prepend, current[0], current[current.length - 1])
      return this.query.prepend ? current[0].docX : current[current.length - 1].docX
    }
    return null
  }


  // Maps the snapshot to usable format the updates source
  private mapAndUpdate(col: Query<DocumentData>) {

    if (this._done.value || this._loading.value) { return }else{

    // loading
    this._loading.next(true)

    // Map snapshot with doc ref (needed for cursor)
return collectionSnapshots(col).pipe(
  tap((arr:any) => {
    let values = arr.map((snap:any) => {
      const data = snap.data() //.payload.doc.data()
      const docX = snap //.payload.doc
      return { ...data, docX } 
    
    })

    // If prepending, reverse the batch order
    values = this.query.prepend ? values.reverse() : values

        // update source with new values, done loading
        this._data.next(values)
        this._loading.next(false)

        // no more values, mark done
        if (!values.length) {
          this._done.next(true)
        }

  })
).pipe(take(1)).subscribe();


    }




    /*
    return col.pipe(
      tap((arr:any) => {
        let values = arr.map((snap:any) => {
          const data = snap.payload.doc.data()
          const doc = snap.payload.doc
          return { ...data, doc }
        })
  
        // If prepending, reverse the batch order
        values = this.query.prepend ? values.reverse() : values

        // update source with new values, done loading
        this._data.next(values)
        this._loading.next(false)

        // no more values, mark done
        if (!values.length) {
          this._done.next(true)
        }
    })
    ).pipe(take(1)).subscribe()
    */
  }

}
