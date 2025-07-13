import { testimonials2 } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5      max-w-[1600px]">
        <TitleHeader
          title="What People Say About Us ?"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials2.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">

                <div>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              </div>
            </GlowCard>
          ))}

          {testimonials2.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">

                <div>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              </div>
            </GlowCard>
          ))}

          {testimonials2.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">

                <div>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
