type RatingProps = {
  id?: string;
  title: string;
  rate: string;
};

const Rating = ({ title, rate }: RatingProps) => (
  <li className="relative after:absolute after:-right-[.5px] after:top-1/2 after:-translate-y-1/2 after:block  after:h-2/3 after:w-[1px] after:bg-white last:after:hidden">
    <span className="text-xl font-semibold">
      {rate}
      <span className="text-accent-1">+</span>
    </span>
    <p className="text-[0.6rem] leading-4 pt-1">{title}</p>
  </li>
);
export default Rating;
