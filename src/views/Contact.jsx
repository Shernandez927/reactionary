import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-16 text-center">
        <h2 className="font-semibold text-autumn-gold text-shadow text-4xl p-2">
          Contact Me
        </h2>
        <p className="text-xl">
          Have a question, want to collaborate, or just want to say hi? Shoot me a message!
        </p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex md:justify-center my-5 p-2 text-black">
            {/* Contact Form with error validation using react-hook-form */}
            <form
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/e5982065df2fd16e660c4557f728e552"
            
            >
            <input
            className="w-full font-semibold p-3 m-2"
            type="text"
            placeholder="Name"
             {...register("name", {
                required: true,
                maxLength: 100,
             })}
            />
            {errors.name && (
                <p className="text-red-500 mt-1">
                    {errors.name.type === "required" && "This field is required"}
                    {errors.name.type === "maxLength" && "Max length is 100 characters"}
                </p>
            )}
            <input
            className="w-full font-semibold p-3 m-2"
            type="text"
            placeholder="Email"
             {...register("email", {
                required: true,
                // Email regex pattern
                // eslint-disable-next-line
                pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
             })}
            />
            {errors.email && (
                <p className="text-red-500 mt-1">
                    {errors.email.type === "required" && "This field is required"}
                    {errors.email.type === "pattern" && "Invalid email address"}
                </p>
            )}
            <textarea
            className="w-full font-semibold p-3 m-2"
            type="text"
            rows="5"
            cols="50"
            placeholder="Message"
             {...register("message", {
                required: true,
                maxLength: 2000
             })}
            />
            {errors.message && (
                <p className="text-red-500 mt-1">
                    {errors.message.type === "required" && "This field is required"}
                    {errors.message.type === "maxLength" && "Max length is 2000 characters"}
                </p>
            )}
            <button className="rounded-lg bg-autumn-gold mt-3 py-3 px-6 xs:text-xs md:text-lg font-semibold hover:scale-105 transition duration-300 shadow-solid-primary">
                Send Message
                <i className="fa-solid fa-reply ml-2"></i>            
            </button>
            </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
