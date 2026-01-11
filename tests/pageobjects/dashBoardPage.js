const{commonUtilities} = require('../utility/commonUtilities');
const { participantListing } = require('../pageObjects/participants/participantListing');
let commonUtilitiesObj
let participantListingPageObj;
export class dashBoardPage {

  constructor(page) {
    this.page = page;
    commonUtilitiesObj=new commonUtilities(this.page)
    this.sitesTab = this.page.locator("//a[text()='Sites']");
    this.usersTab = this.page.locator(
      "//a[normalize-space()='Site Users']"
    );
    this.activitylogTab = this.page.locator("//a[text()='Activity Log']");
    // this.usersTab=this.page.locator("//a[text()='Users']")
    this.PTSreader = this.page.locator(
      "(//a[.='Automation (PTS Reader) Site'])[1]"
    );

    this.eSignreader = this.page.locator(
      "(//a[.='Automation (eSign Reader) Site'])[1]"
    );

    this.userIconOnTopRightCornner = this.page.locator(
      "//*[local-name()='svg'][position()=2]"
    );
    this.userName = this.page.locator(
      "(//a[.='Log Out']//ancestor::ul//li//div//div//h6)[1]"
    );
    this.studiesTab = this.page.getByRole("button", { name: 'Studies' });
   // this.studiesTab = this.page.locator("//span[.='Studies']")
    this.participantTab=this.page.getByRole('button', { name: 'Participants' })
    this.documentsTab=page.getByRole('button', { name: 'Documents' })
    this.documentsSubMenu=page.getByRole('menuitem', { name: 'Documents' })
    this.glossaryTerm=page.getByRole('menuitem', { name: 'Glossary Terms' })
    this.introductions=page.getByRole('menuitem', { name: 'Introductions' })
    this.reportsTab=this.page.locator("//span[.='Reports']")
    this.systemTab = this.page.getByRole("button", { name: "System" });
    this.certificates = this.page.getByRole('menuitem', { name: 'Certificates' });
    this.attribute = this.page.getByRole('menuitem', { name: 'Attributes' });
    this.checklist = this.page.getByRole('menuitem', { name: 'Checklist' });
    this.surveys = this.page.getByRole('menuitem', { name: 'Surveys' });
    this.training = this.page.getByRole('menuitem', { name: 'Training' });
    this.signatures = this.page.getByRole('menuitem', { name: 'Signatures' });
  }

  async clickOnParticipantTab()
  {

    await this.participantTab.click()
    await this.page.waitForLoadState("domcontentloaded");

  }
  async clickOnPTSreader() {
    await this.page.waitForURL("**/dashboard/site");
    await this.PTSreader.waitFor();
    await this.PTSreader.click();
  }

  async clickOneSignreader() {
    participantListingPageObj=new participantListing(this.page)
    await this.page.waitForURL("**/dashboard/site");
    await this.eSignreader.waitFor();
    await this.eSignreader.click();
    if(await participantListingPageObj.getQesPopUpClose().isVisible()){
      await participantListingPageObj.getQesPopUpClose().click();
    }
  }

  async clickOnDocumentsTab()
  {
    await this.documentsTab.waitFor();
    await this.documentsTab.click()
    await this.page.waitForLoadState("domcontentloaded");

  }

  async clickOnDocumentsSubMenu()
  {
    

    const responsePromise = this.page.waitForResponse(response => response.url().includes('/documents?useFilter=true') && response.status() === 200)
    await this.documentsSubMenu.click()
    const response = await responsePromise;
    await this.page.waitForLoadState("domcontentloaded");

  }
  async clickOnSite(siteIdentifier) {
    await this.page.waitForURL("**/dashboard/site");
    await this.eSignreader.waitFor();
    this.page.locator("(//a[.='"+siteIdentifier+"'])").click();
  }

  async clickOnStudiesTab() {
    await this.page.waitForTimeout(8000);
    await this.page.getByRole("button", { name: "Studies" }).click();
  }

  async clickOnSitesTab() {
    await this.sitesTab.click();
  }

  async getStudiesTab() {
    await this.page.waitForTimeout(8000);
    return await this.page.getByRole("button", { name: "Studies" });
  }

  async getSystemTab() {
    await this.page.waitForTimeout(8000);
    return await this.systemTab;
  }

  async getLoginedUserName() {
    await this.page.waitForTimeout(2000),
      this.page.waitForLoadState("domcontentloaded"),
      await this.userIconOnTopRightCornner.click();
    let userName = await this.userName.textContent();
    await this.page.locator(".MuiPopover-root > div").first().click();
    return userName;
  }

  async clickOnUsersTab() {
    await this.usersTab.click();
  }

  async clickOnActivityLogTab() {
    await this.activitylogTab.click();
  }

  async clickOnSystemTab() {
    await this.systemTab.click();
  }

  async clickOnCertificates() {
    await this.certificates.click();
  }

  async getCertificates() {
    return await this.certificates;
  }

  async clickOnAttributes() {
    await this.attribute.click();
  }

  async getAttributes() {
    return await this.attribute;
  }

  async getChecklist() {
    return await this.checklist;
  }

  async getSurvey() {
    return await this.surveys;
  }

  async getTraining() {
    return await this.training;
  }

  async clickOnChecklist() {
    await this.checklist.click();
  }

  async clickOnSurveys() {
    await this.surveys.click();
  }

  async clickOnTraining() {
    await this.training.click();
  }

  getReportsTab()
  {
    this.page.waitForTimeout(4000);
    return this.reportsTab
  }
  async clickOnReportstab()
  {


      //const responsePromise = this.page.waitForResponse(response => response.url().includes('/access/') && response.status() === 200,{ timeout: 130000 });
      await this.reportsTab.click()
      //const response = await responsePromise;
      await this.page.waitForTimeout(10000)
  }

  async clickOnDocumentsTab() {
    await this.documentsTab.click();
  }

  async getDocumentsTab() {
    await this.page.waitForTimeout(8000);
    return await this.documentsTab;
  }

  async clickOnGlossaryTerm() {
    await this.glossaryTerm.click();
  }

  async getGlossaryTerm() {
    await this.page.waitForTimeout(8000);
    return await this.glossaryTerm;
  }

  async getIntroductionAuthoring() {
    await this.page.waitForTimeout(8000);
    return await this.introductions;
  }

  async clickOnIntroductions() {
    await this.introductions.click();
  }

  async getSignatures() {
    return await this.signatures;
  }

  async clickOnSignatures() {
    await this.signatures.click();
  }
}