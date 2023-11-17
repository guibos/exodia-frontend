import {NavItems} from "../../layouts/classes/nav-items/nav-items";

export const navItems: NavItems[] = [
  new NavItems(
    $localize`:@@navItems.home:Home`,
    '/',
    '/assets/external-icons/house.svg'
  ), new NavItems(
    $localize`:@@navItems.board-games:Board games`,
    '/activities/board-games',
    '/assets/external-icons/dice.svg'
  ), new NavItems(
    'Weiβ Schwarz',
    '/activities/weiss-schwarz',
    '/assets/external-icons/card.svg'
  ), new NavItems(
    $localize`:@@navItems.events:Events`,
    '/events',
    '/assets/external-icons/flag.svg'
  ), new NavItems(
    $localize`:@@navItems.video-games:Video games`,
    '/activities/video-games',
    '/assets/external-icons/joystick.svg'
  ), new NavItems(
    $localize`:@@navItems.calendar:Calendar`,
    '/calendar',
    '/assets/external-icons/calendar.svg'
  ), new NavItems(
    $localize`:@@navItems.aboutUs:About us`,
    '/about-us',
    '/assets/external-icons/info.svg'
  ),
]
