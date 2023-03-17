const Carousel_landing = () => {
  return (
    <>
      <div class="carousel w-full flex">
        <div id="item1" class="carousel-item w-full">
          <div className=" flex overflow-scroll snap-x">
            <div>
              <div className="hero bg-base-100">
                <div className="hero-content flex-col">
                  <div>
                    <h1 className=" text-base font-bold">
                      Selamat Datang Di Digital Store
                    </h1>
                    <p className="py-6 text-xs">
                      Nikmati proses cepat dan harga murah disini, login atau
                      register sekarang juga
                    </p>
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" class="carousel-item w-full">
          <div className=" w-full">
            <div>
              <div className="hero bg-base-100">
                <div className="hero-content flex-col">
                  <div>
                    <h1 className=" text-base font-bold">
                      Kenapa belanja disini?
                    </h1>
                    <p className="py-6 text-xs">
                      Semua barang lengkap, Harga Murah, jadi tunggu apa lagi?
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" class="carousel-item w-full">
          <div className=" flex overflow-scroll snap-x">
            <div>
              <div className="hero bg-base-100">
                <div className="hero-content flex-col">
                  <div>
                    <h1 className=" text-base font-bold">
                      Nikmati gratis Ongkir 1000x
                    </h1>
                    <p className="py-6 text-xs">
                      Dapatkan voucher gratis ongkir 1000x dengan KYC KTP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="item4" class="carousel-item w-full">
          <div>
            <div className="hero bg-base-100">
              <div className="hero-content flex-col">
                <div>
                  <h1 className=" text-base font-bold">Anti Lelet</h1>
                  <p className="py-6 text-xs">
                    Jangan khawatir kurir dengan spek balap siap mengantar paket
                    anda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
      </div> */}
    </>
  );
};
export default Carousel_landing;
