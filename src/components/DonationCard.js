import axios from "axios";
// import "../sass/config/_config.scss"
// import "./DonationCard.scss";

export default class DonationCard {

  constructor(element) {
    this.element = element;
  }

  api() {
    return axios.get("https://coop-mock-test-api.herokuapp.com");
  }

  render() {
    if (this.element) {
      const apiResponse = this.api();
      apiResponse.then(response => {
        if (response.data.target && response.data.raised) {
          // Store the two values for usage.
          const donationTargetValue = response.data.target;
          const donationRaisedValue = response.data.raised;
          // Calc the percentage difference between the two values.
          const donationAchievedPercentage = (donationRaisedValue / donationTargetValue) * 100;
          return this.element.innerHTML = `
            <span class="progress-bar">
              <span class="progress-bar__value" style="width: ${donationAchievedPercentage}%;"></span>
            </span>
            <div class="donation-card__values">
              <p class="donation-card__value" data-donation-raised="0">Raised so far <span class="js--donation-raised">£${donationRaisedValue}</span></p>
              <p class="donation-card__value" data-donation-target="0">Target <span class="js--donation-target">£${donationTargetValue}</span></p>
            </div>
          `;
        }
        else {
          return this.element.innerHTML = `
            <p class="donation-card__error">Sorry, there was no information about the cause at this moment. Come back again soon to track its progress.</p>
          `;
        }
      })
    }
  }
}