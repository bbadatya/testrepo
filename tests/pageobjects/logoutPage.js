import { expect, Locator, Page } from "@playwright/test";

export class logoutPage {
  constructor(page) {
    this.page = page;

    this.clickToUserBtn = this.page.locator(
      "//*[local-name()='svg'][position()=2]"
    );

    this.logoutBtn = this.page.locator("//a[.='Log Out']");
  }

  async validLogout() {
    await this.clickToUserBtn.click();

    await this.logoutBtn.click();

    await this.page.waitForLoadState("domcontentloaded");
  }
}