import IconBrandGithub from "@tabler/icons/outline/brand-github.svg";
import IconBrandYoutube from "@tabler/icons/outline/brand-youtube.svg";
import IconBrandX from "@tabler/icons/outline/brand-x.svg";
import IconBrandLinkedin from "@tabler/icons/outline/brand-linkedin.svg";
import IconBrandInstagram from "@tabler/icons/outline/brand-instagram.svg";
import IconBrandFacebook from "@tabler/icons/outline/brand-facebook.svg";
import IconBrandWhatsApp from "@tabler/icons/outline/brand-whatsapp.svg";
import IconBrandTelegram from "@tabler/icons/outline/brand-telegram.svg";
import IconArrowNarrowRightDashed from "@tabler/icons/outline/arrow-narrow-right-dashed.svg";
import IconMapPin from "@tabler/icons/outline/map-pin.svg";
import IconClockHour4 from "@tabler/icons/outline/clock-hour-4.svg";
import type { SvgComponent } from "astro/types";

const icons: Record<string, SvgComponent & ImageMetadata> = {
  twitter: IconBrandX,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  youtube: IconBrandYoutube,
  instagram: IconBrandInstagram,
  facebook: IconBrandFacebook,
  whatsapp: IconBrandWhatsApp,
  telegram: IconBrandTelegram,
  arrowrightdashed: IconArrowNarrowRightDashed,
  location: IconMapPin,
  clock: IconClockHour4,
};

export const getIcon = (iconName: string) => {
  const icon = icons[iconName.toLowerCase()];

  if (icon) return icon;

  throw new Error("— Utilities: unknown icon name");
};
