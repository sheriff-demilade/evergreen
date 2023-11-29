type RatingProps = {
  id?: string;
  title: string;
  rating: string;
};

const Rating = ({ title, rating }: RatingProps) => (
  <li className="">
    <span className="text-xl font-semibold">
      {rating}
      <span className="text-accent-1">+</span>
    </span>
    <p className="text-[0.6rem] leading-4 pt-1">{title}</p>
  </li>
);
export default Rating;
