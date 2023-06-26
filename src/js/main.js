import "./vendor";
import "./helpers";
import "./components/social";
import { ieFix } from "./vendor/ie-fix";
import { vhFix } from "./vendor/vh-fix";
import { actualYear } from "./modules/actualYear";
import header from "./components/header";
import lazyLoading from "./modules/lazyLoading";
import scrollToAnchor from "./modules/scrollToAnchor";
import scrollToTop from "./modules/scrollToTop";
import isActive from "./modules/isActive";
import isActiveMenu from "./modules/isActiveMenu";
import preloader from "./modules/preloader";
import modalResume from "./components/modalResume";
import green from "./vendor/green";

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();
scrollToTop.getScrollPercentage();
isActive.isActive();
isActiveMenu.isActiveMenu();
preloader.preloader();
modalResume.modalResume();
green.green();
