import Article from "../article";
import Form from "../form";

const Cta = () => {
  return (
    <section className="container mx-auto px-3 sm:px-6 xl:px-8 pt-10  lg:pt-14 xl:pt-16 pb-16 xl:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-8 xl:gap-x-12">
      <Article
        heading="Fill the Form to"
        span="get a free consultation"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
      />
      <Form />
    </section>
  );
};

export default Cta;
