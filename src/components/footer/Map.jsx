const Map = () => {

    return (
        <div className="w-[350px]   max-[996px]:!w-[500px] max-xl:w-[180px] max-[996px]:text-center max-[764px]:w-[300px] max-[433px]:w-full
     h-[200px] rounded-xl overflow-hidden max-[539px]:!w-[300px] max-[539px]:mx-auto">
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
    )
}
export default Map;