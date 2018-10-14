import "./sass/styles.scss";
import DonationCard from './components/DonationCard';

const donationCardEl = document.querySelector(".dontainer-card__progress");
const donationCard = new DonationCard(donationCardEl);
donationCard.render();
