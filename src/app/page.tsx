import Image from "next/image";
import CopyAddress from "./components/CopyAddress";

const CONTRACT_ADDRESS = "C1HgBDPt43y5tPa7hbLYUMug1B7ZBrsruEhCVbe7pump";

const IMAGES = {
  heroBg:
    "https://api.builder.io/api/v1/image/assets/TEMP/0d30c6bc357ebdcd7c8a3e39962a2fff446eb8d4?width=2340",
  treeLeft:
    "https://api.builder.io/api/v1/image/assets/TEMP/8ac9b25cbed02c3a1c18029aaf7585394c331540?width=1589",
  treeRight:
    "https://api.builder.io/api/v1/image/assets/TEMP/ed5f127108b202844490d61471b09fbaa284a60c?width=1492",
  cowLeft:
    "https://api.builder.io/api/v1/image/assets/TEMP/5b5abbbbd674d0394e9d337d68a0ef0e62f3e956?width=733",
  cowRight:
    "https://api.builder.io/api/v1/image/assets/TEMP/c92d558b0b30ef72db807393b138f8b8947f9d0b?width=1253",
  grassStrip:
    "https://api.builder.io/api/v1/image/assets/TEMP/98325ebddf750c2a4002ece2bf30a77101236183?width=3056",
  cardBg:
    "https://api.builder.io/api/v1/image/assets/TEMP/1df518bfd25e64e75ea7826b4879e97f64dd1097?width=844",
  fenceBg:
    "https://api.builder.io/api/v1/image/assets/TEMP/b1a919cd45ef30c4ce6921bdc5a79fae6cac68f5?width=3056",
  treeSmall1:
    "https://api.builder.io/api/v1/image/assets/TEMP/b309c1cdf6a897e196f201e14cf8a28cd4949590?width=532",
  treeSmall2:
    "https://api.builder.io/api/v1/image/assets/TEMP/8433b70537aa76289bd99c8dc254d9b47800332b?width=400",
  smallCow:
    "https://api.builder.io/api/v1/image/assets/TEMP/6430b3de6d18d3f5d46a8bf98f21c827532dd469?width=164",
  logo: "/LOGO.png",
};

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Why Cow", href: "#why-cow" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
];

const WHY_ITEMS = [
  {
    title: "It's eco-friendly.",
    description:
      "We use a low-energy blockchain because we care about the planet and the cowbeat.",
  },
  {
    title: "You earn just by holding.",
    description:
      "Seriously. Keep COWSOL in your wallet and watch your balance grow over time.",
  },
  {
    title: "We give back to farmers.",
    description:
      "A bit of every transaction goes toward supporting sustainable agriculture projects.",
  },
  {
    title: "A Little Bit Silly, on Purpose.",
    description:
      "We're here to make crypto more fun, more human, more inclusive, and open too.",
  },
];

const TOKENOMICS_ITEMS = [
  { title: "Total Supply", description: "1 billion coins (1,000,000,000)" },
  { title: "Rewards", description: "2% per transaction" },
  { title: "Charity Cut", description: "1% helps fund farming projects" },
  { title: "Liquidity Lock", description: "Locked up tight for 2 years" },
];

const ROADMAP_PHASES = [
  {
    title: "Phase 1:",
    items: ["Launch COWSOL", "Smart contract audit", "Website + whitepaper go live"],
  },
  {
    title: "Phase 2:",
    items: ["Launch COWSOL", "Smart contract audit", "Whitepaper + Web Launch"],
  },
  {
    title: "Phase 3:",
    items: ["Cows on the Blockchain", "Mobile app + wallet support", "In-person COWCON event"],
  },
];

const STEPS = [
  {
    title: "Grab your wallet",
    description: "Set up a wallet like MetaMask or Trust Wallet.",
  },
  {
    title: "Buy COWSOL on PancakeSwap",
    description: "Swap BNB for COWSOL in just a few clicks.",
  },
  {
    title: "Hold on tight. Help the planet. Join the herd.",
    description: "Sit back, earn rewards, and support farmers along the way.",
  },
];

function BuyNowButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://pump.fun/C1HgBDPt43y5tPa7hbLYUMug1B7ZBrsruEhCVbe7pump"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center border-4 border-cow-dark bg-cow-cream px-8 py-4 font-heading text-xl text-cow-dark shadow-[4px_4px_0_#100C18] transition-transform hover:-translate-y-0.5 ${className}`}
    >
      Buy Now
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-cow-green-200 font-body">
      <header
        id="home"
        className="sticky top-0 z-50 border-b-4 border-cow-dark bg-cow-green-200"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <a href="#home" className="shrink-0">
            <Image
              src={IMAGES.logo}
              alt="COWSOL"
              width={184}
              height={40}
              className="h-8 w-auto sm:h-10"
            />
          </a>
          <nav className="hidden items-center gap-8 font-body text-lg font-semibold text-cow-dark md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:opacity-70">
                {link.label}
              </a>
            ))}
          </nav>
          <BuyNowButton className="px-5 py-2 text-base" />
        </div>
      </header>

      <main className="flex flex-col">
        <section className="relative overflow-hidden bg-gradient-to-b from-cow-green-100 to-cow-green-100/0 px-6 pb-16 pt-20 sm:pt-28">
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
            <h1 className="font-heading text-5xl leading-tight text-cow-dark sm:text-7xl lg:text-8xl">
              Welcome to COWSOL
            </h1>
            <p className="max-w-2xl text-lg font-medium text-cow-text sm:text-2xl">
              The crypto that&apos;s all about community, cows, and a better
              future.
            </p>
            <BuyNowButton />
          </div>
          <div className="relative z-0 mx-auto mt-16 max-w-5xl">
            <Image
              src={IMAGES.heroBg}
              alt="COWSOL farm illustration"
              width={1170}
              height={789}
              className="w-full rounded-xl"
              priority
            />
          </div>
        </section>

        <section
          id="why-cow"
          className="relative overflow-hidden bg-gradient-to-b from-transparent to-cow-green-500 px-6 py-20"
        >
          <Image
            src={IMAGES.treeLeft}
            alt=""
            width={795}
            height={795}
            className="pointer-events-none absolute -left-40 bottom-0 hidden w-72 opacity-90 lg:block"
          />
          <Image
            src={IMAGES.treeRight}
            alt=""
            width={746}
            height={675}
            className="pointer-events-none absolute -right-24 bottom-0 hidden w-72 opacity-90 lg:block"
          />
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <h2 className="font-heading text-4xl text-cow-dark sm:text-6xl">
              What&apos;s COWSOL All About?
            </h2>
            <p className="max-w-xl text-lg font-medium text-cow-text sm:text-2xl">
              A fun crypto helping farmers, rewarding holders, and supporting
              sustainability.
            </p>
            <div className="w-full max-w-2xl">
              <CopyAddress address={CONTRACT_ADDRESS} />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-cow-green-500 px-6 pb-24">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-repeat-x"
            style={{ backgroundImage: `url(${IMAGES.fenceBg})`, backgroundSize: "auto 100%" }}
          />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12">
            <h2 className="inline-block -rotate-2 border-4 border-cow-dark bg-cow-brown px-8 py-4 text-center font-heading text-3xl text-cow-cream sm:text-5xl">
              Why People Love COWSOL
            </h2>
            <div className="grid w-full gap-4 border-4 border-cow-dark bg-cow-cream p-6 sm:grid-cols-2 sm:p-10">
              {WHY_ITEMS.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <h3 className="font-heading text-xl text-cow-dark sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium text-cow-text sm:text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <BuyNowButton />
          </div>
          <Image
            src={IMAGES.cowLeft}
            alt=""
            width={733}
            height={786}
            className="pointer-events-none absolute -bottom-4 left-4 hidden w-40 lg:block"
          />
          <Image
            src={IMAGES.cowRight}
            alt=""
            width={1253}
            height={842}
            className="pointer-events-none absolute -bottom-4 right-4 hidden w-56 lg:block"
          />
        </section>

        <section id="tokenomics" className="bg-cow-green-50 px-6 py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-14">
            <h2 className="font-heading text-4xl text-cow-dark sm:text-6xl">
              COWSOL Tokenomics
            </h2>
            <div className="grid w-full items-center gap-12 lg:grid-cols-2">
              <svg
                viewBox="0 0 648 470"
                className="mx-auto w-full max-w-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M324.279 469.589C503.373 469.589 648.558 402.679 648.558 320.141C648.558 237.603 503.373 170.693 324.279 170.693C145.185 170.693 0 237.603 0 320.141C0 402.679 145.185 469.589 324.279 469.589Z"
                  fill="#63B047"
                />
                <path
                  d="M324.279 460.24C503.373 460.24 648.558 393.33 648.558 310.792C648.558 228.254 503.373 161.344 324.279 161.344C145.185 161.344 0 228.254 0 310.792C0 393.33 145.185 460.24 324.279 460.24Z"
                  fill="#A8D16D"
                />
                <path
                  d="M49.36 238.62C49.36 302.411 175.511 353.994 331.09 353.994C486.669 353.994 612.82 302.345 612.82 238.62C612.82 174.894 486.691 123.223 331.09 123.223C175.489 123.223 49.36 174.894 49.36 238.62Z"
                  fill="#BECA7D"
                />
                <path
                  d="M609.326 97.7941V233.56L321.75 241.259V58.6831L609.326 97.7941Z"
                  fill="#63B047"
                />
                <path
                  d="M321.749 90.183L609.325 97.794C588.029 42.692 471.57 0.590044 331.089 0.590044C303.843 0.558601 276.62 2.19667 249.574 5.49504L321.749 90.185V90.183Z"
                  fill="#579436"
                />
                <path
                  d="M249.574 5.4939V168.67L321.749 241.26V90.1829L249.574 5.4939ZM536.229 295.68V220.406H623.898V295.68C580.844 462.858 321.75 434.768 321.75 434.768V295.68H536.229Z"
                  fill="#80BA5A"
                />
                <path
                  d="M321.617 218.646V357.712C321.617 357.712 580.953 387.562 623.897 220.406L321.617 218.646Z"
                  fill="#95CB70"
                />
                <path
                  d="M16.637 301.29C16.637 299.31 17.165 198.541 17.165 198.541L116.965 198.013C142.655 187.55 169.219 179.38 196.348 173.596L220.018 198.013L321.774 200.213V309.209H284.632L69.735 375.486C13.1 330.348 16.637 301.29 16.637 301.29Z"
                  fill="#8CB470"
                />
                <path
                  d="M321.749 200.279L196.345 74.895C196.345 74.895 17.25 109.871 17.25 200.28C17.25 200.28 11.931 230.658 69.732 276.83L321.749 200.279Z"
                  fill="#76985F"
                />
                <path
                  d="M139.622 338.64V353.73L321.75 297.044L322.958 434.833C322.958 434.833 150.72 436.747 69.711 375.441V338.64H139.622Z"
                  fill="#E9F3B2"
                />
                <path
                  d="M321.75 260.155L322.958 397.966C322.958 397.966 150.72 399.88 69.711 338.574L321.75 260.155Z"
                  fill="#BECA7D"
                />
              </svg>

              <div className="flex flex-col gap-4">
                {TOKENOMICS_ITEMS.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 border-4 border-cow-dark bg-cow-cream px-6 py-5"
                  >
                    <span className="h-6 w-6 shrink-0 rounded-full bg-cow-green-600" />
                    <div className="flex flex-col gap-1">
                      <h3 className="font-heading text-xl text-cow-dark sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="text-base font-medium text-cow-text sm:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="relative overflow-hidden bg-cow-green-100 px-6 py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-14">
            <h2 className="font-heading text-4xl text-cow-dark sm:text-6xl">
              COWSOL Roadmap
            </h2>
            <div className="grid w-full gap-8 md:grid-cols-3">
              {ROADMAP_PHASES.map((phase, index) => (
                <div
                  key={phase.title}
                  className={`flex flex-col gap-4 rounded-2xl bg-cow-green-500 p-8 text-cow-cream ${
                    index === 1 ? "md:mt-12" : ""
                  }`}
                >
                  <h3 className="font-heading text-2xl sm:text-3xl">
                    {phase.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {phase.items.map((item) => (
                      <li key={item} className="text-base font-medium sm:text-lg">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-cow-green-100 to-cow-green-200 px-6 py-24">
          <Image
            src={IMAGES.treeSmall1}
            alt=""
            width={266}
            height={283}
            className="pointer-events-none absolute -left-8 bottom-0 hidden w-32 lg:block"
          />
          <Image
            src={IMAGES.treeSmall2}
            alt=""
            width={200}
            height={260}
            className="pointer-events-none absolute -right-4 bottom-0 hidden w-24 lg:block"
          />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-14">
            <h2 className="font-heading text-4xl text-cow-dark sm:text-6xl">
              Want In? It&apos;s Easy
            </h2>
            <div className="grid w-full gap-6 sm:grid-cols-3">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="flex flex-col items-center gap-4 border-4 border-cow-dark bg-cow-cream p-6 text-center"
                >
                  <span className="font-heading text-3xl text-cow-green-600">
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-lg text-cow-dark">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-cow-text">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full max-w-2xl">
              <CopyAddress address={CONTRACT_ADDRESS} />
            </div>
          </div>
        </section>

        <section id="buy" className="relative overflow-hidden bg-cow-green-200 px-6 py-24">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-repeat-x"
            style={{ backgroundImage: `url(${IMAGES.grassStrip})`, backgroundSize: "auto 100%" }}
          />
          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <h2 className="font-heading text-4xl text-cow-dark sm:text-6xl">
              Join the Herd
            </h2>
            <p className="max-w-xl text-lg font-medium text-cow-text sm:text-2xl">
              Built by people who believe crypto should be fun and impactful.
            </p>
            <BuyNowButton />
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://x.com/cowsolcoin?s=11&t=vnKjXgcVlKTxS7TXudn4Yg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex h-14 w-14 -rotate-6 items-center justify-center border-4 border-cow-dark bg-cow-cream shadow-[3px_3px_0_#100C18] transition-transform hover:-translate-y-0.5"
              >
                <svg className="w-8 h-8" viewBox="0 0 23 23" fill="none">
                  <path
                    d="M6.87839 5.56845L7.97341 4.41525L8.45969 9.66987L15.1928 10.4279L12.9884 12.7484L8.88571 12.3081L9.28623 16.6454L8.18961 17.7992L7.66969 12.1786L1.25208 11.4911L3.51265 9.11133L7.24518 9.53199L6.87839 5.56845ZM12.601 11.7745L13.208 11.1352L3.83609 10.08L3.1848 10.7657L12.601 11.7745Z"
                    fill="#100C18"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/+Lxfsu8X_MO82YTQx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-14 w-14 -rotate-6 items-center justify-center border-4 border-cow-dark bg-cow-cream shadow-[3px_3px_0_#100C18] transition-transform hover:-translate-y-0.5"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#100C18">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.98 1.25-5.58 3.69-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.23.35-.47.96-.73 3.75-1.63 6.25-2.71 7.5-3.23 3.56-1.47 4.3-1.73 4.79-1.74.11 0 .35.03.5.15.12.1.17.24.19.34.02.09.04.28.01.45z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t-4 border-cow-dark bg-cow-green-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <Image
            src={IMAGES.logo}
            alt="COWSOL"
            width={184}
            height={40}
            className="h-8 w-auto"
          />
          <p className="text-sm font-semibold text-cow-dark sm:text-base">
            © $COWSOL. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold text-cow-text sm:text-base">
            <a href="#" className="hover:opacity-70">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:opacity-70">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
