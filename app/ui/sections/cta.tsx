import Article from "../article";
import Form from "../form";

const Cta = () => {
  return (
    <section className="container mx-auto px-3 py-10 grid grid-cols-1 gap-y-6">
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
