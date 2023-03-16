const Footer = () => {
  return (
    <div className=" bg-black text-white/60 flex justify-between gap-3 font-quick p-5 text-sm">
      <div className=" flex">
        <p>&copy; copyright 2023</p>
        <div className=" translate-y-2">
          <hr className=" text-white/60 h-1 w-6 rotate-90" />
        </div>

        <p>Digital Store</p>
      </div>
      <div>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;
