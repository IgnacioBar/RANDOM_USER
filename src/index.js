import { createCard } from "./modules/createCard";
import { getUserData } from "./modules/getUserData";

const userData = await getUserData();
createCard(userData);
