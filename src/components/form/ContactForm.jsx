import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";

const ContactForm = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^\d{10}$/, "Phone number must be 10 digits"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required("Message is required"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange"
    });

    const onSubmit = (data) => {
        console.log("Form Submitted: ", data);
        toast.success("Form submitted successfully!");
    };


    const onError = (errors) => {
        Object.values(errors).forEach((err) => {
            toast.error(err.message);
        });
    };
    return (
        <div className="w-full h-auto rounded-[10px] shadow-[0_4px_10px_2px_rgba(0,0,0,0.15)] p-6 mt-20">
            <div className="flex gap-7 max-sm:flex-col-reverse">
                <div className="w-1/2 max-sm:w-full h-auto rounded-l-[10px] overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7065.882152268673!2d85.328601!3d27.688216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bbe2d2973b%3A0x14f3e6630e80f740!2sButwal%20Power%20Co%20Ltd.!5e0!3m2!1sen!2sus!4v1746694173228!5m2!1sen!2sus"
                        height="100%"
                        width="100%"
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className=" w-1/2 max-sm:w-full rounded-r-[10px] overflow-hidden h-auto">
                    <div className='mb-7'>
                        <h1 className='font-extrabold text-[20px] text-MainRed max-md:text-[18px]'>Get In Touch</h1>
                        <p className='text-sm max-md:text-xs text-black/80'>
                            Drop your details and we will get back to you shortly.
                        </p>
                    </div>
                    <form
                        className="space-y-4 w-full"
                        onSubmit={handleSubmit(onSubmit, onError)}
                        noValidate
                    >
                        <div className="p-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                {...register("name")}
                                className="w-full border text-sm max-md:text-[13px] border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex gap-4 max-lg:flex-col">
                            <div className="w-1/2 max-lg:w-full p-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    {...register("phone")}
                                    className="w-full border text-sm max-md:text-[13px] border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div className="w-1/2 max-lg:w-full p-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="w-full border text-sm max-md:text-[13px] border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        <div className="p-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                {...register("subject")}
                                className="w-full border text-sm max-md:text-[13px] border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="p-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                            <textarea
                                rows="4"
                                {...register("message")}
                                className="w-full border text-sm max-md:text-[13px] border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-6 rounded cursor-pointer"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm