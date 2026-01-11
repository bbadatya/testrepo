import { request } from "@playwright/test";
import { dashBoardPage } from "../pageObjects/dashBoardPage";
import{reportsPage} from"../pageObjects/reports/reportsPage"
import{documentTypeAuthListing} from"./system/documentTypeAuth/documentTypeAuthListing"
import{privacyPolicyListing} from"./system/privacyPolicyConfiguration/privacyPolicyListing"
import{sponsorManagementListing, sponsorMgmtListing} from"./system/sponsorMgmt/sponsorManagementListing"
import{workflowAuthListing} from"./system/workflowTypeAuth/workflowAuthListing"
import{translationMgmtListing} from"./system/translationMgmt/translationMgmtListing"
import { attribute } from "./documents/documents/attributes";
import { contentManualEntry } from "./documents/documents/contentManualEntry";
import { contentUploadFile } from "./documents/documents/contentUploadFile";
import { documentDetail } from "./documents/documents/documentDetail";
import { documentListing } from "./documents/documents/documentListing";
import { newDocument } from "./documents/documents/newDocument";
import { signature } from "./documents/documents/signature";
import { users } from "./documents/documents/users";
import { video } from "./documents/documents/video";
import { audio } from "./documents/documents/audio";
import { variables } from "./documents/documents/variables";
import { attachments } from "./documents/documents/attachments";
import { glossaryTerm } from "./documents/documents/glossaryAndRef";

const { loginPage } = require("../pageObjects/loginPage");
const { logoutPage } = require("../pageObjects/logoutPage");

import { participantListing } from "./participants/participantListing";
import{ participantTimeline } from "./participants/participantTimeline"
import{UserConfirmationModelAfterSign} from "./participants/userConfirmationModelAfterSign"
import{userConfirmationModelBeforeSign} from"./participants/userConfirmationModelBeforeSign"
import{ successPage} from "./participants/successPage"
//site
const { reader } = require("../pageObjects/participants/reader");
const { summaryPage } = require("../pageObjects/participants/summaryPage")
import{ signatureCanvas } from "./participants/signatureCanvas"
import{ signatureForm } from "./participants/signatureForm"
//import { successPage } from "./participants/successPage";
//site
const { site } = require("./studies/site/site");
const{documentCollectionDetail}=require("./studies/site/documentCollectionDetail")
const { siteDetail } = require("./studies/site/siteDetail");
const { siteSettings } = require("./studies/site/siteSettings");
//study
const {
  studiesListingPage,
} = require("../pageObjects/studies/studiesListingPage");
const {
  studiesDetailsPage,
} = require("../pageObjects/studies/studiesDetailsPage");

//user
const { siteUser } = require("../pageObjects/studies/siteUser");
const { user } = require("../pageObjects/users/user");
import { attributesListing } from "./system/attributes/attributesListing";
import { createAttributes } from "./system/attributes/createAttributes";
import { fields } from "./system/attributes/fields";
import { fieldsSignature } from "./signatureAuthoring/fieldsSignature";
import { checklistListing } from "./system/checklist/checklistListing";
import { createChecklist } from "./system/checklist/createChecklist";
import { checklistFields } from "./system/checklist/checklistFields";
import { surveyListing } from "./system/survey/surveyListing";
import { createSurvey } from "./system/survey/createSurvey";
import { surveyFields } from "./system/survey/surveyFields";
import { trainingDetails } from "./system/trainingConfiguration/trainingDetails";
import { glossaryTermListing } from "./glossaryTerm/glossaryTermListing";
import { createGlossaryTerm } from "./glossaryTerm/createGlossaryTerm";
import { introductionAuthoringListing } from "./introductionAuthoring/introductionAuthoringListing";
import { createIntroductionAuthoring } from "./introductionAuthoring/createIntroductionAuthoring";
import { signatureListing } from "./signatureAuthoring/signatureListing";
import { addDocument } from "./system/certificate/addDocument";
import { certificateListing } from "./system/certificate/certificateListing";


export class POMmanager {
  constructor(page) {
    this.page = page;
    this.loginpage = new loginPage(this.page);
    this.logoutpage = new logoutPage(this.page);
    this.dashboardpage = new dashBoardPage(this.page);

    this.attribute=new attribute(this.page)
    this.contentManualEntry=new contentManualEntry(this.page)
    this.contentUploadFile=new contentUploadFile(this.page)
    this.documentDetail=new documentDetail(this.page)
    this.documentListing=new documentListing(this.page)
    this.newDocument=new newDocument(this.page)
    this.signature=new signature(this.page)
    this.users=new users(this.page)
    this.video=new video(this.page)
    this.audio=new audio(this.page)
    this.variables=new variables(this.page)
    this.attachments=new attachments(this.page)
    this.glossaryTerm=new glossaryTerm(this.page)

    this.participantlisting=new participantListing(this.page)
    this.participanttimeline=new participantTimeline(this.page)
    this.userConfirmationModelBeforeSign=new userConfirmationModelBeforeSign(this.page)
    this.UserConfirmationModelAfterSign=new UserConfirmationModelAfterSign(this.page)
    this.reader = new reader(this.page);
    this.summaryPage = new summaryPage(this.page);
    this.signatureCanvas = new signatureCanvas(this.page);
    this.signatureForm = new signatureForm(this.page);
    this.successPage= new successPage(this.page)
    this.successPageUser = new successPage(this.page)

    this.sitePage = new site(this.page);
    this.siteUserPage = new siteUser(this.page);
    this.studyPage = new studiesListingPage(this.page);
    this.siteDetail = new siteDetail(this.page);
    this.siteSettings = new siteSettings(this.page);
    this.userPage = new user(this.page);
    this.studiesDetailsPage = new studiesDetailsPage(this.page);
    this.documentCollectionDetail=new documentCollectionDetail(this.page)

    this.reportsPage=new reportsPage(this.page)
    this.attributeListingPage = new attributesListing(this.page);
    this.createAttributePage = new createAttributes(this.page);
    this.signatureAuthPage = new signatureListing(this.page);
    this.addDocumentPage = new addDocument(this.page);
    this.fieldsPage = new fields(this.page);
    this.fieldsSignaturePage = new fieldsSignature(this.page);
    this.checklistListingPage = new checklistListing(this.page);
    this.certificateListingPage = new certificateListing(this.page);
    this.createChecklistPage = new createChecklist(this.page);
    this.checklistFieldsPage = new checklistFields(this.page);
    this.surveyListingPage = new surveyListing(this.page);
    this.createSurveyPage = new createSurvey(this.page);
    this.surveyFieldsPage = new surveyFields(this.page);
    this.trainingDetailsPage = new trainingDetails(this.page);
    this.documentTypeAuthListingPage=new documentTypeAuthListing(this.page)
    this.privacyPolicyConfigurationPage = new privacyPolicyListing(this.page)
    this.sponsorManagementPage = new sponsorManagementListing(this.page)
    this.workflowAuthListingPage=new workflowAuthListing(this.page)
    this.translationManagmentListingPage=new translationMgmtListing(this.page)
    this.glossaryTermListingPage = new glossaryTermListing(this.page);
    this.createGlossaryTermPage = new createGlossaryTerm(this.page);
    this.introductionAuthoringListingPage = new introductionAuthoringListing(this.page);
    this.createIntroductionAuthoringPage = new createIntroductionAuthoring(this.page);
  }

  getLoginPageObj() {
    return this.loginpage;
  }

  getLogutPageObj() {
    return this.logoutpage;
  }

  getDashBoardPageObj() {
    return this.dashboardpage;
  }

  getDoumentsAttributeSection(){

    return this.attribute

  }

  getDoumentsContentmanualentrySection(){

    return this.contentManualEntry

  }
  getDoumentsContentUploadFileSection(){

    return this.contentUploadFile

  }
  getDoumentsDocumentDetailSection(){

    return this.documentDetail
  }
  getDoumentsDocumentListing(){
    return this.documentListing

  }
  getDoumentsNewDocument(){

    return this.newDocument
  }
  getDoumentsSignatureSection(){

    return this.signature
  }
  getDoumentsUsersSection(){

    return this.users
  }
  getDoumentsVideoSection(){

    return this.video
  }

  getDocumentGlossaryTermSection()
  {
    return this.glossaryTerm
  }
  getDoumentsAudioSection()
  {
    return this.audio
  }

  getDocumentVariablesSection()
  {

    return this.variables

  }

  getDocumentAttachmentsSection()
  {
    return this.attachments
  }
  getParticipantListingObj()
  {

    return this.participantlisting
  }

  getParticipantTimelineObj()
  {
    return this.participanttimeline
  }

  getUserConfirmationModelBeforeSign()
  {

    return this.userConfirmationModelBeforeSign
  }
  getUserConfirmationModelAfterSign()
  {

    return this.UserConfirmationModelAfterSign
  }

  getsuccessPageObj() {
    return this.successPage;
  }
  getsuccessPageUserPageObj(){

    return this.successPageUser;

  }
  getsitePageObj() {
    return this.sitePage;
  }

  getuserPageObj() {
    return this.userPage;
  }

  getsiteUserPageObj() {
    return this.siteUserPage;
  }

  getStudyListingPageObj() {
    return this.studyPage;
  }

  getStudyDetailsPageObj() {
    return this.studiesDetailsPage;
  }

  getsiteDetailPageObj() {
    return this.siteDetail;
  }

  getsiteSettingsPageObj() {
    return this.siteSettings;
  }

  getSummaryPageObj() {
    return this.summaryPage;
  }

  getReaderPageObj() {
    return this.reader;
  }

  getsignatureCanvasPageObj() {
    return this.signatureCanvas;
  }

  getsignatureFormPageObj() {
    return this.signatureForm;
  }

  getdocumentCollectionDetailPageObj()
  {
    return this.documentCollectionDetail
  }

  getreportsPageObj()
  {

    return this.reportsPage
  }

  getAttributeListingPageObj() {
    return this.attributeListingPage;
  }

  getCreateAttributesPageObj() {
    return this.createAttributePage;
  }

  getSignatureAuthoringPageObj() {
    return this.signatureAuthPage;
  }

  getCertificatePageObj() {
    return this.addDocumentPage;
  }

  getFieldsPageObj() {
    return this.fieldsPage;
  }

  getFieldsSignaturePageObj() {
    return this.fieldsSignaturePage;
  }

  getDocumentTypeAuthListingPageObj(){
    return this.documentTypeAuthListingPage
  }

  getPrivacyPolicyConfigurationPageObj(){
    return this.privacyPolicyConfigurationPage
  }

  getsponsorManagementPageObj(){
    return this.sponsorManagementPage
  }

  getChecklistListingPageObj() {
    return this.checklistListingPage;
  }

  getCreateChecklistPageObj() {
    return this.createChecklistPage;
  }

  getChecklistFieldsPageObj() {
    return this.checklistFieldsPage;
  }

  getSurveyListingPageObj() {
    return this.surveyListingPage;
  }

  getCreateSurveyPageObj() {
    return this.createSurveyPage;
  }

  getSurveyFieldsPageObj() {
    return this.surveyFieldsPage;
  }

  getTrainingDetailsPageObj() {
    return this.trainingDetailsPage;
  }

  getWorkflowAuthListingPageObj(){
    return this.workflowAuthListingPage
  }

  gettranslationManagementPageObj(){
    return this.translationManagmentListingPage
  }

  getGlossaryTermListingPageObj(){
    return this.glossaryTermListingPage;
  }

  getCreateGlossaryTermPageObj(){
    return this.createGlossaryTermPage;
  }

  getIntroductionAuthoringListingPageObj(){
    return this.introductionAuthoringListingPage;
  }

  getCreateIntroductionAuthoringPageObj(){
    return this.createIntroductionAuthoringPage;
  }

  getCertificateListingPageObj() {
    return this.certificateListingPage;
  } 
}