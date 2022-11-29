import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  page = "";
  data = "";

  constructor(
    private actRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let page = this.actRoute.snapshot.params['page'];
    this.execute(page)
  }

  execute(page:string){
    this.page = "";

    // if(page == ""){
    //   this.page = "";
    // }

    if(page == "SHIPPING-POLICY"){
      this.page = "SHIPPING";
this.data = `Shipping & Delivery Policy

Last updated on Nov 3rd 2022
Shipping is not applicable for business.
`
    }

    if(page == "REFUND-POLICY"){
      this.page = "REFUNDS";
this.data = `Cancellation & Refund Policy

Last updated on Nov 3rd 2022
No cancellations & Refunds are entertained
`
    }

    if(page == "TERMS-OF-SERVICE"){
      this.page = "TERMS";
this.data = this.getTerms()
    }

    if(page == "PRIVACY-POLICY"){
      this.page = "PRIVACY";
this.data = this.getPrivacy()
    }

    if(page == "LICENSE"){
      this.page = "LICENSE";
this.data = this.getLicense()
    }

  }

  getTerms(){
    return `Terms of Service

    Last updated on Nov 3rd 2022
    Effective Date: October 15, 2016
    Website Covered: islesys.com
    
    THE AGREEMENT: The use of this website and services on this website provided by Dipesh Bhoir (hereinafter referred to as "Owner") are subject to the following Terms & Conditions (hereinafter the "Terms of Service"), all parts and sub-parts of which are specifically incorporated by reference here together with the Privacy Policy. Following are the Terms of Service governing your use of islesys.com (the "Website"), all pages on the Website and any services provided by or on this Website ("Services").
    
    By accessing either directly or through a hyperlink, the Website, and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the Terms of Service including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation vendors, buyers, customers, merchants, browsers and/ or contributors of content. You acknowledge and agree that the Website may use your personal information in the manner described in our Privacy Policy which sets forth how information collected about you is collected, used and stored.
    
    
    1) DEFINITIONS
    
    The parties referred to in these Terms of Service shall be defined as follows:
    
    a) Owner, Us, We: The Owner, as the creator, operator, and publisher of the Website, makes the Website, and certain Services on it, available to users. Dipesh Bhoir, Owner, Us, We, Our, Ours and other first-person pronouns will refer to the Owner, as well as all employees and affiliates of the Owner.
    
    b) You, the User, the Client: You, as the user of the Website, will be referred to throughout these Terms of Service with second-person pronouns such as You, Your, Yours, or as User or Client. For the purpose of these Terms of Service, the term "User" or "you" shall mean any natural or legal person who person is accessing the Website. The term '"Your" shall be construed accordingly.
    
    c) Parties: Collectively, the parties to these Terms of Service (the Owner and You) will be referred to as Parties.
    
    
    2) ASSENT & ACCEPTANCE
    
    By using the Website, You warrant that You have read and reviewed these Terms of Service and that You agree to be bound by it. If You do not agree to be bound by these Terms of Service, please leave the Website immediately. The Owner only agrees to provide use of this Website and Services to You if You assent to these Terms of Service. Further, based on the Services obtained by a User, additional terms and conditions in respect of the specific Services may apply, which shall be deemed an agreement between the Users and the Owner.
    
    
    3) ABOUT THE SITE
    
    The Website is an online store which carries out sale of the following: Digital Assets. We reserve the right to refuse service or refuse to sell the products on the Website at our sole discretion to anyone for any reason at any time.
    
    The Website does not screen or censor the users who register on and access the Website. You assume all risks associated with dealing with other users with whom you come in contact through the Website. You agree to use the Website only for lawful purposes without infringing the rights of or restricting the use of this Website by any third party.
    
    
    4) LICENSE TO USE WEBSITE
    
    The Owner may provide You with certain information as a result of Your use of the Website or Services. Such information may include but is not limited to, documentation, data, or information developed by the Owner, and other materials which may assist in Your use of the Website or Services ("Owner Materials"). Subject to these Terms of Service, the Owner grants You a non-exclusive, limited, non-transferable and revocable license to use the Owner Materials solely in connection with Your use of the Website and Services. The Owner Materials may not be used for any other purpose and this license terminates upon Your cessation of use of the Website or Services or at the termination of these Terms of Service.
    
    You agree not to collect contact information of other Users from the Website or download or copy any information by means of unsolicited access so as to communicate directly with them or for any reason whatsoever.
    
    Any unauthorized use by you shall terminate the permission or license granted to you by the Website and You agree that you shall not bypass any measures used by the Owner to prevent or restrict access to the Website.
    
    
    5) INTELLECTUAL PROPERTY
    
    You agree that the Website and all Services provided by the Owner are the property of the Owner, including all copyrights, trademarks, trade secrets, patents, and other intellectual property ("Owner IP"). You agree that the Owner owns all rights, title, and interest in and to the Owner IP and that You will not use the Owner IP for any unlawful or infringing purpose. You agree not to reproduce or distribute the Owner IP in any way, including electronically or via registration of any new trademarks, trade names, service marks or Uniform Resource Locators (URLs), without express written permission from the Owner.
    
    a) In order to make the Website and Services available to You, You hereby grant the Owner a royalty-free, non-exclusive, worldwide license to copy, display, use, broadcast, transmit and make derivative works of any content You publish, upload or otherwise make available to the Website ("Your Content"). The Owner claims no further proprietary rights in Your Content.
    
    b) If You feel that any of Your intellectual property rights have been infringed or otherwise violated by the posting of information or media by another of Our users, please contact Us and let Us know.
    
    
    6) USER OBLIGATIONS
    
    As a user of the Website or Services, You may be asked to register with Us. When You do so, You will choose a user identifier, which may be Your email address or another term, as well as a password. You may also provide personal information, including, but not limited to, Your name. You are responsible for ensuring the accuracy of this information. This identifying information will enable You to use the Website and Services. You must not share such identifying information with any third party and if You discover that Your identifying information has been compromised, You agree to notify Us immediately in writing. An email notification will suffice. You are responsible for maintaining the safety and security of Your identifying information as well as keeping Us apprised of any changes to Your identifying information. The billing information You provide us, including credit card, billing address and other payment information, is subject to the same confidentiality and accuracy requirements as the rest of Your identifying information. Providing false or inaccurate information, or using the Website or Services to further fraud or unlawful activity is grounds for immediate termination of these Terms of Service. The Owner reserves the right to refuse service, terminate accounts, or remove or edit content in its sole discretion.
    
    
    7) PAYMENT & FEES
    
    Should You register for any of the paid Services on this website or purchase any product or service on this website, You agree to pay Us the specific monetary amounts required for that product or those Services. These monetary amounts ("Fees") will be described to You during Your account registration and/or confirmation process. The final amount required for payment will be shown to You immediately prior to purchase. Payment for any on-going Services is billed automatically until You notify Us that You would like to terminate Your access to the Services.
    
    We reserve the right to refuse service or refuse to sell the products on the Website at our sole discretion to anyone for any reason at any time.
    
    
    8) ACCEPTABLE USE
    
    You agree not to use the Website or Services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Website or Services in any way that could damage the Website, Services or general business of the Owner.
    
    a) You further agree not to use the Website or Services:
    
    I) To harass, abuse, or threaten others or otherwise violate any person's legal rights;
    
    II) To violate any intellectual property rights of the Owner or any third party;
    
    III) To upload or otherwise disseminate any computer viruses or other software that may damage the property of another;
    
    IV) To perpetrate any fraud;
    
    V) To engage in or create any unlawful gambling, sweepstakes, or pyramid scheme;
    
    VI) To publish or distribute any obscene or defamatory material;
    
    VII) To publish or distribute any material that incites violence, hate or discrimination towards any group;
    
    VIII) To unlawfully gather information about others.
    
    You are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to infringe on any third party's intellectual property or proprietary rights, or rights of publicity or privacy, whether knowingly or unknowingly; (d) to violate any local, federal or international law, statute, ordinance or regulation; ((e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information or any content which is defamatory, libelous, threatening, unlawful, harassing, indecent, abusive, obscene, or lewd and lascivious or pornographic, or exploits minors in any way or assists in human trafficking or content that would violate rights of publicity and/or privacy or that would violate any law; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to damage, disable, overburden, or impair the Website or any other party's use of the Website; (j) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet; (l) to personally threaten or has the effect of personally threatening other Users. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses. The Company has the full authority to review all content posted by Users on the Website. You acknowledge that the Website is not responsible or liable and does not control the content of any information that may be posted to the Website by You or other User of the Website and you are solely responsible for the same. You agree that You shall not upload, post, or transmit any content that you do not have a right to make available (such as, the intellectual property of another party).
    
    You agree to comply with all applicable laws, statutes and regulations concerning your use of the Website and further agree that you will not transmit any information, data, text, files, links, software, chats, communication or other materials that are abusive, invasive of another's privacy, harassing, defamatory, vulgar, obscene, unlawful, false, misleading, harmful, threatening, hateful or racially or otherwise objectionable, including without limitation material of any kind or nature that encourages conduct that could constitute a criminal offence, give rise to civil liability or otherwise violate any applicable local, state, provincial, national, or international law or regulation, or encourage the use of controlled substances.
    
    We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libellous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.
    
    You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
    
    
    9) COMMUNICATION
    
    You understand that each time uses the Website in any manner, you agree to these Terms. By agreeing to these Terms, you acknowledge that you are interested in availing and purchasing the Services that you have selected and consent to receive communications via phone or electronic records from the Website including e-mail messages telling you about products and services offered by the Website (or its affiliates and partners) and understanding your requirements. Communication can also be by posting any notices on the Website. You agree that the communications sent to You by the Website shall not be construed as spam or bulk under any law prevailing in any country where such communication is received.
    
    
    10) AFFILIATE MARKETING & ADVERTISING
    
    The Owner, through the Website and Services, may engage in affiliate marketing whereby the Owner receives a commission on or percentage of the sale of goods or services on or through the Website. The Owner may also accept advertising and sponsorships from commercial businesses or receive other forms of advertising compensation.
    
    
    11) PRIVACY INFORMATION
    
    Through Your Use of the Website and Services, You may provide Us with certain information. By using the Website or the Services, You authorize the Owner to use Your information in India and any other country where We may operate.
    
    a) Information We May Collect or Receive: When You register for an account, You provide Us with a valid email address and may provide Us with additional information, such as Your name or billing information. Depending on how You use Our Website or Services, We may also receive information from external applications You use to access Our Website, or We may receive information through various web technologies, such as cookies, log files, clear gifs, web beacons or others.
    
    b) How We Use Information: We use the information gathered from You to ensure Your continued good experience on Our website, including through email communication. We may also track certain of the passive information received to improve Our marketing and analytics, and for this, We may work with third-party providers.
    
    c) How You Can Protect Your Information: If You would like to disable Our access to any passive information We receive from the use of various technologies, You may choose to disable cookies in Your web browser. Please be aware that the Owner will still receive information about You that You have provided, such as Your email address.
    
    
    12) SALE OF GOODS/SERVICES
    
    The Owner may sell goods or services or allow third parties to sell goods or services on the Website. The Owner undertakes to be as accurate as possible with all information regarding the goods and services, including product descriptions and images. However, the Owner does not guarantee the accuracy or reliability of any product information and You acknowledge and agree that You purchase such products at Your own risk. For goods or services sold by others, the Owner assumes no liability for any product and cannot make any warranties about the merchantability, fitness, quality, safety or legality of these products. For any claim You may have against the manufacturer or seller of the product, You agree to pursue that claim directly with the manufacturer or seller and not with the Owner. You hereby release the Owner from any claims related to goods or services manufactured or sold by third parties, including any and all warranty or product liability claims.
    
    We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. Any orders including orders by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address may be subject to the above. We may restrict the sales of products or Services to any person, geographic region or jurisdiction at our sole discretion as we may decide on a case-by-case basis.
    
    We further reserve an absolute right to refuse any order placed by any person and to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors. If we cancel your order, we will contact the e-mail and/or billing address/phone number provided at the time the order was made.
    
    We take care to accurately display the colours and images of our products but, we cannot guarantee that your computer or phone screen's display of any colour will be accurate. We also do not provide any warranties that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations and standards, or that any errors in the Service will be corrected. Prices and descriptions of products are subject to change at any time without notice, at our sole discretion. We may remove or discontinue any products from our site without prior notice. Any offer for any product or service made on this site is void where prohibited.
    
    We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools. Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).
    
    
    13) SHIPPING/DELIVERY/RETURN POLICY
    
    You agree to ensure payment for any items You may purchase from Us and You acknowledge and affirm that prices are subject to change. We reserve the right to reject or cancel an order for any reason, including errors or omissions in the information You provide to Us. If We do so after payment has been processed, We will issue a refund to You in the amount of the purchase price. We also may request additional information from You prior to confirming a sale and We reserve the right to place any additional restrictions on the sale of any of Our products. For the sale of digital products, We will charge Your credit or debit card when the product is made available to You for digital use and/or download. For any questions, concerns, or disputes, You agree to contact Us in a timely manner at the following: ask@islesys.com.
    
    If You are unhappy with anything You have purchased on Our Website, You may do the following:
    
    We do not provide any refunds.
    
    We will make reimbursements for returns without undue delay, and not later than:
    
    (i) 30 days after the day we received back from you any goods supplied; or
    
    (ii) (if earlier) 30 days after the day you provide evidence that you have returned the goods; or
    
    (iii) if there were no goods supplied, 30 days after the day on which we are informed about your decision to cancel this contract.
    
    We will make the reimbursement using the same means of payment as you used for the initial transaction unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of the reimbursement.
    
    
    14) REVERSE ENGINEERING & SECURITY
    
    You agree not to undertake any of the following actions:
    
    a) Reverse engineer, or attempt to reverse engineer or disassemble any code or software from or on the Website or Services;
    
    b) Violate the security of the Website or Services through any unauthorized access, circumvention of encryption or other security tools, data mining or interference to any host, user or network.
    
    
    15) DATA LOSS
    
    The Owner does not accept responsibility for the security of Your account or content. You agree that Your use of the Website or Services is at Your own risk.
    
    
    16) INDEMNIFICATION
    
    You agree to defend and indemnify the Owner and any of its affiliates (if applicable) and hold Us harmless against any and all legal claims and demands, including reasonable attorney's fees, which may arise from or relate to Your use or misuse of the Website or Services, Your breach of these Terms of Service, or Your conduct or actions. You agree that the Owner shall be able to select its own legal counsel and may participate in its own defence if the Owner wishes.
    
    
    17) SPAM POLICY
    
    You are strictly prohibited from using the Website or any of the Owner's Services for illegal spam activities, including gathering email addresses and personal information from others or sending any mass commercial emails.
    
    
    18) THIRD-PARTY LINKS & CONTENT
    
    The Owner may occasionally post links to third-party websites or other services. You agree that the Owner is not responsible or liable for any loss or damage caused as a result of Your use of any third party services linked to from Our Website.
    
    
    19) MODIFICATION & VARIATION
    
    The Owner may, from time to time and at any time without notice to You, modify these Terms of Service. You agree that the Owner has the right to modify these Terms of Service or revise anything contained herein. You further agree that all modifications to these Terms of Service are in full force and effect immediately upon posting on the Website and that modifications or variations will replace any prior version of these Terms of Service unless prior versions are specifically referred to or incorporated into the latest modification or variation of these Terms of Service.
    
    a) To the extent any part or sub-part of these Terms of Service is held ineffective or invalid by any court of law, You agree that the prior, effective version of these Terms of Service shall be considered enforceable and valid to the fullest extent.
    
    b) You agree to routinely monitor these Terms of Service and refer to the Effective Date posted at the top of these Terms of Service to note modifications or variations. You further agree to clear Your cache when doing so to avoid accessing a prior version of these Terms of Service. You agree that Your continued use of the Website after any modifications to these Terms of Service is a manifestation of Your continued assent to these Terms of Service.
    
    c) In the event that You fail to monitor any modifications to or variations of these Terms of Service, You agree that such failure shall be considered an affirmative waiver of Your right to review the modified Agreement.
    
    
    20) ENTIRE AGREEMENT
    
    This Agreement constitutes the entire understanding between the Parties with respect to any and all use of this Website. This Agreement supersedes and replaces all prior or contemporaneous agreements or understandings, written or oral, regarding the use of this Website.
    
    
    21) SERVICE INTERRUPTIONS
    
    The Owner may need to interrupt Your access to the Website to perform maintenance or emergency services on a scheduled or unscheduled basis. You agree that Your access to the Website may be affected by unanticipated or unscheduled downtime, for any reason, but that the Owner shall have no liability for any damage or loss caused as a result of such downtime.
    
    
    22) TERM, TERMINATION & SUSPENSION
    
    The Owner may terminate these Terms of Service with You at any time for any reason, with or without cause. The Owner specifically reserves the right to terminate these Terms of Service if You violate any of the terms outlined herein, including, but not limited to, violating the intellectual property rights of the Owner or a third party, failing to comply with applicable laws or other legal obligations, and/or publishing or distributing illegal material. If You have registered for an account with Us, You may also terminate these Terms of Service at any time by contacting Us and requesting termination. Please keep in mind that any outstanding fees will still be due even after termination of Your account. At the termination of these Terms of Service, any provisions that would be expected to survive termination by their nature shall remain in full force and effect.
    
    
    23) NO WARRANTIES
    
    You agree that Your use of the Website and Services is at Your sole and exclusive risk and that any Services provided by Us are on an "As Is" basis. The Owner hereby expressly disclaims any and all express or implied warranties of any kind, including, but not limited to the implied warranty of fitness for a particular purpose and the implied warranty of merchantability. The Owner makes no warranties that the Website or Services will meet Your needs or that the Website or Services will be uninterrupted, error-free, or secure. The Owner also makes no warranties as to the reliability or accuracy of any information on the Website or obtained through the Services. You agree that any damage that may occur to You, through Your computer system, or as a result of the loss of Your data from Your use of the Website or Services is Your sole responsibility and that the Owner is not liable for any such damage or loss.
    
    All information, software, products, services and related graphics are provided on this site is "as is" and "as available" basis with without warranty of any kind, either expressed or implied. The Website disclaims all warranties, expressed or implied including, without limitation, all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement or arising from a course of dealing, usage, or trade practice. The company makes no representation about the suitability of the information, software, products, and services contained on this Website for any purpose, and the inclusion or offering of any products or services on this Website does not constitute any endorsement or recommendation of such products or services.
    
    The Website makes no warranty that the use of the Website will be uninterrupted, timely, secure, without defect or error-free. You expressly agree that use of the site is at your own risk. The Website shall not be responsible for any content found on the Website.
    
    Your use of any information or materials on this site or otherwise obtained through use of this Website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
    
    The Website assumes no responsibility for the accuracy, currency, completeness or usefulness of information, views, opinions, or advice in any material contained on the Website. Any information from third parties or advertisers is made available without making any changes and so the Website cannot guarantee accuracy and is not liable for any inconsistencies arising thereof. All postings, messages, advertisements, photos, sounds, images, text, files, video, or other materials posted on, transmitted through, or linked from the Website, are solely the responsibility of the person from whom such Content originated, and the Website does not control and is not responsible for Content available on the Website.
    
    There may be instances when incorrect information is published inadvertently on our Website or in the Service such as typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. Any errors, inaccuracies, or omissions may be corrected at our discretion at any time, and we may change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
    
    We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website should be taken to indicate that all information in the Service or on any related website has been modified or updated.
    
    The Website shall not be responsible for any interaction between you and the other users of the Website. Under no circumstances will the Website be liable for any goods, services, resources, or content available through such third-party dealings or communications, or for any harm related thereto. The Website is under no obligation to become involved in any disputes between you and other users of the Website or between you and any other third parties. You agree to release the Website from any and all claims, demands, and damages arising out of or in connection with such dispute.
    
    You agree and understand that while the Website has made reasonable efforts to safeguard the Website, it cannot and does not ensure or make any representations that the Website or any of the information provided by You cannot be hacked by any unauthorised third parties. You specifically agree that the Website shall not be responsible for unauthorized access to or alteration of Your transmissions or data, any material or data sent or received or not sent or received, or any transactions entered into through the Website.
    
    You hereby agree and confirm that the Website shall not be held liable or responsible in any manner whatsoever for such hacking or any loss or damages suffered by you due to unauthorized access of the Website by third parties or for any such use of the information provided by You or any spam messages or information that You may receive from any such unauthorised third party (including those which are although sent representing the name of the Website but have not been authorized by the Website) which is in violation or contravention of this Terms of Service or the Privacy Policy.
    
    You specifically agree that the Website is not responsible or liable for any threatening, defamatory, obscene, offensive, or illegal content or conduct of any other party or any infringement of another's rights, including intellectual property rights. You specifically agree that the Website is not responsible for any content sent using and/or included on the Website by any third party.
    
    The Website has no liability and will make no refund in the event of any delay, cancellation, strike, force majeure, or other causes beyond their direct control, and they have no responsibility for any additional expense omissions delays or acts of any government or authority.
    
    You will be solely responsible for any damage to your computer system or loss of data that results from the download of any information and/or material. Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.
    
    In no event shall the Website be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of the site, with the delay or inability to use the site or related services, the provision of or failure to provide Services, or to deliver the products or for any information, software, products, services and related graphics obtained through the site, or any interaction between you and other participants of the Website or otherwise arising out of the use of the Website, damages resulting from use of or reliance on the information present, whether based on contract, tort, negligence, strict liability or otherwise, even if the Website or any of its affiliates/suppliers has been advised of the possibility of damages. If despite the limitation above, the Company is found liable for any loss or damage which arises out of or in any way connected with the use of the Website and/ or provision of Services, then the liability of the Company will in no event exceed, 50% (Fifty percent) of the amount you paid to the Company in connection with such transaction(s) on this Website.
    
    You accept all responsibility for and hereby agree to indemnify and hold harmless the company from and against, any actions taken by you or by any person authorized to use your account, including without limitation, disclosure of passwords to third parties. By using the Website, you agree to defend, indemnify, and hold harmless the indemnified parties from any and all liability regarding your use of the site or participation in any site's activities. If you are dissatisfied with the Website, or the Services or any portion thereof, or do not agree with these terms, your only recourse and exclusive remedy shall be to stop using the site.
    
    
    24) LIMITATION ON LIABILITY
    
    The Owner is not liable for any damage that may occur to You as a result of Your use of the Website or Services, to the fullest extent permitted by law. The maximum liability of the Owner arising from or relating to these Terms of Service 88 8828225 22 252 828825 22 88. 2888 (852228 822 55258525 2282) 25 252 522522 825 2585 22 252 88225 82 252 8582 885 (5) 222258. 5588 8282822 5228828 22 522 525 588 885828 82 825, 828855822, 852 222 8828225 22, 8282 2522828 25 52822528, 8228285222858 25 25282882 5525228, 2228822282, 825882 885888822, 25555, 25 22528 22 522 2825.
    
    
    25) GENERAL PROVISIONS:
    
    a) LANGUAGE: All communications made or notices given pursuant to these Terms of Service shall be in the English language.
    
    b) JURISDICTION, VENUE & GOVERNING LAW: Through Your use of the Website or Services, You agree that the laws of India shall govern any matter or dispute relating to or arising out of these Terms of Service, as well as any dispute of any kind that may arise between You and the Owner, with the exception of its conflict of law provisions. In case any litigation specifically permitted under these Terms of Service is initiated, the Parties agree to submit to the exclusive jurisdiction of the courts at Mumbai, India. The Parties agree that this choice of law, venue, and jurisdiction provision is not permissive, but rather mandatory in nature. You hereby waive the right to any objection of venue, including assertion of the doctrine of forum non-conveniens or similar doctrine.
    
    c) 8555282585: 5588 825222222, 25 252 582528 2552225 525252525, 252 222 82 58882225, 8285, 825825 25 225258882 25528225525 82 85282 25 2552 82 825. 552585 25282 52528 22 5258882, 25 252 582528 2552225 525252525, 82 58882225, 8285, 825825 25 225258882 25528225525 82 252 88225, 252 582528 525 88588882828 22 252 88225 8888 8825 525 82552 22 522 588822228, 55282882552258, 8588288258 525 252852258.
    
    d) SEVERABILITY: If any part or sub-part of these Terms of Service is held invalid or unenforceable by a court of law or competent arbitrator, the remaining parts and sub-parts will be enforced to the maximum extent possible. In such condition, the remainder of these Terms of Service shall continue in full force.
    
    e) NO WAIVER: In the event that We fail to enforce any provision of these Terms of Service, this shall not constitute a waiver of any future enforcement of that provision or of any other provision. Waiver of any part or sub-part of these Terms of Service will not constitute a waiver of any other part or sub-part.
    
    f) HEADINGS FOR CONVENIENCE ONLY: Headings of parts and sub-parts under these Terms of Service are for convenience and organization, only. Headings shall not affect the meaning of any provisions of these Terms of Service.
    
    g) NO AGENCY, PARTNERSHIP OR JOINT VENTURE: No agency, partnership, or joint venture has been created between the Parties as a result of these Terms of Service. No Party has any authority to bind the other to third parties.
    
    h) 28885 2885585: 552 88225 88 222 885882 225 522 2588552 22 2252252 552 22 855828 822225 828 5258225882 8222528 828855822, 852 222 8828225 22, 5828 22 225, 5828 22 88888 55252582828, 5828 22 28882552 55252582828, 58228, 228552228, 5828 22 252552 525 2525558 588582258, 525 22525 5828 85885 252 82 552 22 5222528222 8858528252828.
    
    i) ELECTRONIC COMMUNICATIONS PERMITTED: Electronic communications are permitted to both Parties under these Terms of Service, including e-mail or fax. For any questions or concerns, please email Us at the following address: ask@islesys.com.
    `
  }

  getPrivacy(){
    return `Privacy Policy

    Last updated on Nov 3rd 2022
    Effective Date: October 15, 2016
    Website Covered: islesys.com
    
    This website is operated by ISLESYS. The privacy of our users is extremely important to us and therefore we encourage all users to read this policy very carefully because it contains important information regarding:
    
    who we are;
    how and why we collect, store, use and share personal information;
    your rights in relation to your personal information; and
    how to contact us and supervisory authorities in the event that you have a complaint.
    Who we are
    
    ISLESYS ('we', 'us', 'our') collect, use and are responsible for storing certain personal information about you ('you', 'your', 'yours').
    
    
    The personal information we collect and use
    
    Personal information is information which you can be identified from (and does not include any anonymised forms of information).
    
    1. Types of personal information
    
    We may process the following types of personal information in relation to you:
    
    Users contact information to verify his identity.
    
    2. Types of sensitive information
    
    We may also process the following types of sensitive information in relation to you:
    
    Payment details and Identity card.
    
    
    How your personal information is collected
    
    This section describes how the above types of personal information are collected by us. Your personal information will be collected as follows:
    
    1. Personal information obtained from you directly
    
    We will sometimes obtain information from you directly, including when you:
    
    While making a payment and Signing up.
    
    2. Changes to the way in which we collect your personal information
    
    In the event that we need to obtain personal information in relation to you from any other source than those described above, we shall notify you of this.
    
    
    How we use your personal information
    
    1. General purposes
    
    In general, your personal information will generally be processed for the following purposes:
    
    The personal information is used to verify identity of the user required to keep track of license agreements.
    
    Any sensitive information in relation to you will generally be processed for the following purposes:
    
    to verify identity and make regular payments.
    
    2. Fraud prevention
    
    We will undertake fraud checks via use of your personal information. This will involve sharing and working with Fraud Prevention Agencies. We do so to protect our own commercial interests (which is encompassed within our own legitimate interests as a business).
    
    In general, your information will be used for fraud prevention purposes:
    
    while making payments and keeping track of who paid it.
    
    Fraud prevention agencies can hold your personal information for different periods of time, the maximum period being six years.
    
    
    Lawful basis for processing of your personal information
    
    We have described above the purposes for which we may process your personal information. These purposes will at all times be justified by UK data protection law.
    
    1. General lawful bases
    
    The lawful basis upon which we are able to process your personal data are:
    
    (1) where we have your consent to use your data for a specific purpose;
    
    (2) where it is necessary to enter into a legal contract with you or to perform obligations under a legal contract with you;
    
    (3) where it is necessary to enable us to comply with a legal obligation;
    
    (4) where it is necessary to ensure our own legitimate interests or the legitimate interests of a third party (provided that your own interests and rights do not override those interests). Wherever we rely upon this basis, details of the legitimate interests concerned shall be provided to you;
    
    (5) where we need to protect your own vital interests (or the vital interests of another person); and/or
    
    (6) where it is needed in the public interest (or where we are acting in our official functions), provided that the task or function has a clear basis in law.
    
    In general, in order to meet the purposes we have described above, we will process your personal information where it is necessary to comply with legal obligations which we are required to adhere to.
    
    2. Lawful bases applicable to sensitive information
    
    We have explained above that we may process sensitive personal information in relation to you. We have defined above the general purposes for which we process your personal sensitive information. These purposes are justified by lawful conditions. There are however additional conditions which apply to sensitive personal information.
    
    We will therefore only process your sensitive personal information for any or a combination of the following additional lawful reasons, which are:
    
    (1) where you have provided us with explicit consent;
    
    (2) where it is necessary for employment, social security and social protection (and it is properly authorised by law);
    
    (3) where it is necessary for your vital interests or the interests of another person;
    
    (4) where the processing is carried out in the course of legitimate activities under a foundation, association or non-for-profit body with a political, philosophical, religious or trade union aim;
    
    (5) where the information is made publicly available by you;
    
    (6) where the processing is necessary for defending or establishing legal claims or court proceedings;
    
    (7) where the processing is necessary for substantial public interest;
    
    (8) where the information is necessary for medical or social care reasons;
    
    (9) where the information is necessary for reasons of public interests or in the area of public health; and/or
    
    (10) where the information is necessary for scientific research, statistical purposes, historical research or archiving purposes in public interest.
    
    In general, in order to meet the purposes we have described, we will usually process your sensitive information where:
    
    it is necessary in order to protect the vital interests of you or the interests of another person. This shall only apply where the person whose vital interests are to be protected is unable to consent (for example to urgent medical treatment).
    
    
    Sharing of your personal information
    
    On any occasion where any of your personal information is shared with any third party, we shall only permit them to process such information for our required purposes, under our specific instruction, and not for their own purposes. We are required to enter into a formal legal agreement to enable such sharing to take place.
    
    We do not anticipate that we will need to share your personal information with any third party. We will notify should this position change.
    
    
    How long your personal information will be kept
    
    Your personal information will only be kept for the period of time which is necessary for us to fulfil the above purposes.
    
    We envisage that your personal information shall be retained by us as follows:
    
    Until you are user of website.
    
    After the period described above, your information shall be properly deleted or anonymised.
    
    
    Keeping your information secure
    
    We will ensure the proper safety and security of your personal information and have measures in place to do so. We will also use technological and organisation measures to keep your information secure. These measures are as follows:
    
    We encrypt all data.
    
    We are ISO 27001 certified. This certification assists us in ensuring the safety of your personal information.
    
    We have proper procedures in place to deal with any data security breach, which shall be reported and dealt with in accordance with data protection laws and regulations. You shall also be notified of any suspected data breach concerning your personal information.
    
    
    Use of your information outside of the United Kingdom
    
    We have described above the purposes and lawful bases for which we process your personal information. In order to meet those needs, we may transfer your personal information outside of the United Kingdom.
    
    Your personal information may be transferred to:
    
    India & United States.
    
    The recipient country or countries listed above have been deemed by the United Kingdom to have adequate protection in place so that the security of your personal information can be maintained.
    
    
    Children
    
    Our website is not intended for children (anybody under the age of 18). We do not intend to collect data from children.
    
    
    Your rights
    
    Under the UK General Data Protection Regulation you have a number of important rights free of charge. In summary, those include rights to:
    
    (1) fair processing of information and transparency over how we use your use personal information;
    
    (2) access to your personal information and to certain other supplementary information that this Privacy Statement is already designed to address;
    
    (3) require us to correct any mistakes in your information which we hold;
    
    (4) require the erasure of personal information concerning you in certain situations;
    
    (5) receive the personal information concerning you which you have provided to us, in a structured, commonly used and machine-readable format and have the right to transmit this information to a third party in certain situations;
    
    (6) object at any time to processing of personal information concerning you for direct marketing;
    
    (7) object to decisions being taken by automated means which produce legal effects concerning you or similarly significantly affect you;
    
    (8) object in certain other situations to our continued processing of your personal information, or ask us to suspend the processing procedure in order for you confirm its assurance or our reasoning for processing it;
    
    (9) object to processing our your personal information where we are doing so in reliance upon a legitimate interest of our own or of a third party and where you wish to raise to an objection to this particular ground;
    
    (10) otherwise restrict our processing of your personal information in certain circumstances;
    
    (11) claim compensation for damages caused by our breach of any data protection laws; and/or
    
    (12) in any circumstance where we rely upon your consent for processing personal information, you may withdraw this consent at any time.
    
    For further information on each of those rights, including the circumstances in which they apply, see the Guidance from the UK Information Commissioner's Office (ICO) on your rights under the General Data Protection Regulations.
    
    If you would like to exercise any of these rights please contact SUPPORT in the following manner:
    
    ________
    
    
    8255 828585222228
    
    52 225 82585 8822 2588 228882 82 5222525 225252 (225 2552282: 55582, 85522 25822, 8558882) 282582 8222582 58 58822 252 5225888 82828.
    
    
    Complaints procedure
    
    22 5222 2552 82 852 5282882 522 85252 25 8228252 225 55882 58252 255 582 22 2255 82225252822.
    
    552 55 2222558 8525 2522282822 8225852822 5882 28828 225 58252 22 82522 5 822285822 8825 252 85225888252 552525822. 552 85225888252 552525822 82 252 528225 5822522 88 252 52225252822 822288882225.
    
    
    Changes to the privacy policy
    
    This privacy policy was published on ________ and last updated on ________.
    
    We may change this privacy policy from time to time and will notify you of any changes by:
    
    ________
    
    
    Contacting us
    
    The relevant person to contact regarding your personal information is: SUPPORT.
    
    Any requests or questions regarding the use of your personal information should be made to the above named person using the following method:
    
    ________
    
    
    Sources of further Information
    
    This policy provides key information to you regarding the processed of your information. For certain areas of our information processing, we have further comprehensive details contained in other documentation. This information can be located as follows:
    
    Our policy regarding the use of your sensitive data entitled WE DO NOT SHARE YOUR INFORMATION FOR ANY PURPOSE BEYOND SAID. can be located at:
    https://github.com/dipesious/Myriad-Undertakings/blob/main/TERMS-OF-SERVICE
    `
  }

  getLicense(){
    return `License

Last updated on Nov 3rd 2022
   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
`
  }

}
