import Article from "../article";

const Pricing = () => {
  return (
    <section className="container mx-auto px-3 py-10">
      <Article
        heading="Pricing"
        span="Table"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut volutpat tincidunt eget at felisioj,"
        className="mb-10"
      />

      <div className="flex flex-col gap-10">
        <div className="bg-accent-2 text-white rounded-xl overflow-hidden">
          <div className="p-6 border-b">
            <p className="text-base font-semibold mb-3">Standard Plan</p>
            <p className="text-3xl font-bold mb-2">$20.00</p>
            <span className="text-xs">/Per month</span>
          </div>
          <div className="p-6">
            <p className="text-base font-semibold mb-3">Standard Plan</p>
            <p className="text-3xl font-bold mb-2">$20.00</p>
            <span className="text-xs">/Per month</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
