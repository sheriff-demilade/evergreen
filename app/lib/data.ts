import hours from "../../public/services-icons/24-Hour-Service.png";
import digging from "../../public/services-icons/Digging.png";
import flower from "../../public/services-icons/Flower-Growing.png";
import sprinkler from "../../public/services-icons/Garden-Sprinkler.png";
import gardener from "../../public/services-icons/Gardener.png";
import mower from "../../public/services-icons/lawn-mower.png";
import mark from "../../public/mark-icon.svg";
import CheckCircleIcon from "../ui/icons/check-circle-icon";

export const mainNavLinks = [
  { id: "mainNavLink_1", title: "Home", href: "/" },
  { id: "mainNavLink_2", title: "About Us", href: "about" },
  { id: "mainNavLink_3", title: "Our Service", href: "services" },
  { id: "mainNavLink_4", title: "Blog", href: "blog" },
  { id: "mainNavLink_5", title: "Pages", href: "pages" },
];

export const joinedUsers = [
  {
    id: "joinedUser_1",
    src: "/customers/customer-1.png",
    width: 72,
    height: 72,
  },
  {
    id: "joinedUser_2",
    src: "/customers/customer-2.png",
    width: 72,
    height: 72,
  },
  {
    id: "joinedUser_3",
    src: "/customers/customer-3.png",
    width: 72,
    height: 72,
  },
  {
    id: "joinedUser_4",
    src: "/customers/customer-4.png",
    width: 72,
    height: 72,
  },
  {
    id: "joinedUser_5",
    src: "/customers/customer-5.png",
    width: 72,
    height: 72,
  },
];

export const ratings = [
  { id: "rating_1", title: "Years Experience", rate: "13" },
  { id: "rating_2", title: "Product", rate: "13k" },
  { id: "rating_3", title: "Satisfied Clients", rate: "7k" },
  { id: "rating_4", title: "Local Team Members", rate: "124" },
];

export const services = [
  {
    id: "service_1",
    title: "Lawn Care",
    description:
      "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
    icon: mower,
    readMoreLink: "#",
  },
  {
    id: "service_2",
    title: "Free Consultations",
    description:
      "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
    icon: hours,
    readMoreLink: "#",
  },
  {
    id: "service_3",
    title: "Irrigation Systems",
    description:
      "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
    icon: flower,
    readMoreLink: "#",
  },
  {
    id: "service_4",
    title: "Seasonal Maintenance",
    description:
      "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
    icon: digging,
    readMoreLink: "#",
  },

  {
    id: "service_5",
    title: "Weater Features",
    description:
      "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
    icon: sprinkler,
    readMoreLink: "#",
  },
  {
    id: "service_6",
    title: "Gardeners",
    description:
      "Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget ultricies auctor. Proin iaculis metus vel condimentum tincidunt.",
    icon: gardener,
    readMoreLink: "#",
  },
];

export const ReasonsToCooseUs = [
  {
    id: "reason_1",
    title: "Sustainable Practices",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur.",
    icon: mark,
    readMoreLink: "#",
  },
  {
    id: "reason_2",
    title: "Licensed and Insured",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur.",
    icon: mark,
    readMoreLink: "#",
  },
  {
    id: "reason_3",
    title: "Local Knowledge",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur.",
    icon: mark,
    readMoreLink: "#",
  },
];

export const PricingPackages = [
  {
    id: "package_1",
    packageName: "Package 1",
    title: "Standard Plan",
    price: 20.0,
    features: [
      { id: "feature_1", featureName: "Initial Consultation" },
      { id: "feature_2", featureName: "Labor Costs" },
      { id: "feature_3", featureName: "Materials and Plants" },
      { id: "feature_4", featureName: "Equipment and Machinery" },
    ],
    purchaseLink: "#",
  },
  {
    id: "package_2",
    packageName: "Package 2",
    title: "Premium Plan",
    price: 90.0,
    features: [
      { id: "feature_1", featureName: "Initial Consultation" },
      { id: "feature_2", featureName: "Labor Costs" },
      { id: "feature_3", featureName: "Materials and Plants" },
      { id: "feature_4", featureName: "Equipment and Machinery" },
      { id: "feature_5", featureName: "Permits and Inspection Fees" },
    ],
    purchaseLink: "#",
  },
];
