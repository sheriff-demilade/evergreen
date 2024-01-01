type RatingProps = {
  id?: string;
  title: string;
  rate: string;
};

const Rating = ({ title, rate }: RatingProps) => (
  <li className="relative after:absolute after:-right-[.5px] after:top-1/2 after:-translate-y-1/2 after:block  after:h-2/3 after:w-[1px] after:bg-white last:after:hidden">
    <span className="text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold">
      {rate}
      <span className="text-accent-1">+</span>
    </span>
    <p className="text-[0.6rem] md:text-xs leading-4 pt-1 md:pt-3">{title}</p>
  </li>
);
export default Rating;
