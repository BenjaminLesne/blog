const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  { href: '/about', title: 'About' },
]

export default headerNavLinks

enum Gift {
  Coal = 0,
  Train = 1,
  Bicycle = Train << 1,
  SuccessorToTheNintendoSwitch = Bicycle << 1,
  TikTokPremium = SuccessorToTheNintendoSwitch << 1,
  Vape = TikTokPremium << 1,
  Traditional = Train | Bicycle,
  OnTheMove = Coal | TikTokPremium | Vape | Bicycle,
  OnTheCouch = (OnTheMove & ~Bicycle) | SuccessorToTheNintendoSwitch,
}
