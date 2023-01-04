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
    <section id="contact" className="py-48">
        <h2 className="font-worksans text-center text-rose font-semibold text-4xl">Let's Talk</h2>
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
            action="https://formsubmit.co/shelbyhernandez4851107@gmail.com"
            method="POST"
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
                <p className="text-red mt-1">
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
                pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
             })}
            />
            {errors.email && (
                <p className="text-red mt-1">
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
                <p className="text-red mt-1">
                    {errors.message.type === "required" && "This field is required"}
                    {errors.message.type === "maxLength" && "Max length is 2000 characters"}
                </p>
            )}
            <button className="rounded-sm bg-gradient-purple mt-4 py-3 px-7 text-lg font-semibold text-deep-blue hover:text-white transition duration-500">
                Send me a Message
            
            </button>
            </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
