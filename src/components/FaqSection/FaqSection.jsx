import faqImg from "../../assets/faq.png";
const FaqSection = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="bg-[#F3F5F6] mt-[60px]"
    >
      <div className=" flex flex-col lg:flex-row max-w-screen-xl mx-auto p-8 justify-center ">
        <div className=" lg:w-1/2">
          <img className=" w-[440px]" src={faqImg} alt="" />
        </div>
        <div className=" lg:w-1/2  space-y-4">
          <h1 className=" p-2 text-3xl font-bold">
            Frequently Asked Questions
          </h1>
          <hr />
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What is StockPilot and how does it work?
            </div>
            <div className="collapse-content text-[#717171]">
              <p>
                StockPilot is an advanced Inventory Management System designed
                to help businesses efficiently control and manage their stock.
                It uses cutting-edge technology to provide real-time insights,
                streamline operations, and maximize efficiency in inventory
                management.
              </p>
            </div>
          </div>
          <hr />
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I integrate StockPilot with my existing systems?
            </div>
            <div className="collapse-content text-[#717171]">
              <p>
                Integrating StockPilot with your existing systems is a seamless
                process. Our system is designed to be flexible and compatible
                with various platforms. Our support team will guide you through
                the integration process to ensure a smooth transition.
              </p>
            </div>
          </div>
          <hr />
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is StockPilot suitable for small businesses?
            </div>
            <div className="collapse-content text-[#717171]">
              <p>
                Yes, StockPilot is suitable for businesses of all sizes. Whether
                you are a small startup or a large enterprise, our system is
                scalable and customizable to meet the unique needs of your
                business. We believe in providing solutions that grow with you.
              </p>
            </div>
          </div>
          <hr />
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What kind of support is available for StockPilot users?
            </div>
            <div className="collapse-content text-[#717171]">
              <p>
                StockPilot offers dedicated customer support to assist you with
                any questions or issues you may encounter. Our support team is
                available via email and live chat during business hours.
                Additionally, we provide comprehensive documentation for
                self-help and troubleshooting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
