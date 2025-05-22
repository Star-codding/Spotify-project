import React from 'react'
import "./Banner.css"

export default function Banner() {
    return (
        <div className="grid grid-cols-[28%_auto] h-[89vh] bg-black ">
            <div className="bg-[red]  text-center leading-[300px] text-white text-[22px] capitalize h-full bg-[rgb(18,18,18)] m-[5px] p-[10px] rounded-[10px]">

                <div className='w-[96%] flex justify-between  border-white leading-[15px] p-[15px_8px] text-[16px] font-bold'>
                    <div>Your Library</div>
                    <div><i class="fa-solid fa-plus" ></i></div>
                </div>

                <div className='mt-[40px] w-[100%] font-bold'>
                    <div className='leading-[30px] bg-[rgb(31,31,31)] p-[15px] rounded-[15px] text-left'>
                        <p className='text-[19px]'>Create your first Playlist</p>
                        <p className='text-[16px]'>it's easy, we'll help you</p>
                        <button className='border p-[3px_15px] text-[16px] mt-[10px] rounded-[20px] bg-[white] text-[black] leading-[25px]'>Create Playlist</button>
                    </div>
                    <div className='leading-[30px] bg-[rgb(31,31,31)] p-[15px] rounded-[15px] text-left mt-[30px]'>
                        <p className='text-[19px]'>Create your first Playlist</p>
                        <p className='text-[16px]'>it's easy, we'll help you</p>
                        <button className='border p-[3px_15px] text-[16px] mt-[10px] rounded-[20px] bg-[white] text-[black] leading-[25px]'>Create Playlist</button>
                    </div>
                </div>


                <div className='w-10% leading-[10px] text-[12px] mt-[30px] p-[5px_15px]'>
                    <div className='flex gap-[10px] '>
                        <p>Legal</p>
                        <p>Safety & Privacy Center</p>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                    </div>
                    <div className='flex gap-[10px] mt-[30px]' >
                        <p> About us</p>
                        <p>Accessiblity</p>
                    </div>
                    <div className='flex gap-[10px] mt-[30px]'>
                        <p>Cookies</p>
                    </div>
                </div>

                <div className='leading-[10px] flex mt-[50px] ml-[10px] border  w-[150px]  rounded' >
                    <select className='text-[16px] bg-[black] w-[150px]'>
                        <option>English</option>
                        <option >Hindi</option>
                    </select>
                </div>

            </div>










                {/* Row - 1 */}


            <div className="bg-[rgb(32,32,32)] leading-[300px] text-center text-white text-[22px]  overflow-y-scroll m-[5px]  rounded-[10px]">
                <div>
                    <div className='flex leading-[30px] p-[15px] justify-between'>
                        <div className='font-bold'>Trending Songs</div>
                        <div className='text-[14px]'>Show all</div>
                    </div>
                    <div className='grid grid-cols-6 gap-[15px] p-[15px]'>
                        <div>
                            <img src="/public/images/one.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Pal Pal</p>
                                <p className='text-[13px] leading-[25px]'>Afusic,AlisoomroMusic </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/two.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Mand</p>
                                <p className='text-[13px] leading-[25px]'>Bayaan,Hassan Raheem,Rovolio </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/three.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[10px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>SuperStar</p>
                                <p className='text-[13px] leading-[25px]'>dox,JASKARAN,Rita Kim </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/four.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Henry,come on</p>
                                <p className='text-[13px] leading-[25px]'>Lana Del Rey</p>
                            </div>
                        </div>

                        <div>
                            <img src="images/five.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Finding Her</p>
                                <p className='text-[13px] leading-[25px]'>Kushagra,Bharath,Seaheal </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/six.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>God Bless U(From "Good Bad Ugly")</p>
                                <p className='text-[13px] leading-[25px]'>Anirudh Ravichandar   ,Paal Dabba, G.V... </p>
                            </div>
                        </div>
                    </div>
                </div>


                
                {/* Row - 2 */}
                
                


                <div>
                    <div className='flex leading-[30px] p-[15px] justify-between'>
                        <div className='font-bold'>Popularity artists</div>
                        <div className='text-[14px]'>Show all</div>
                    </div>
                    <div className='grid grid-cols-6 gap-[15px] p-[15px]'>
                        <div >
                            <img src="images/seven.jpeg" className='rounded-[50%]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Atif Aslam</p>
                                <p className='text-[13px] leading-[25px]'>Artist </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/eight.jpeg" className='rounded-[50%]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Vishal Shekhar</p>
                                <p className='text-[13px] leading-[25px]'>Artist </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/nine.jpeg" className='rounded-[50%]' />
                            <div className='leading-[10px] text-left  p-[10px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Sachin Jigar</p>
                                <p className='text-[13px] leading-[25px]'>Artist</p>
                            </div>
                        </div>

                        <div>
                            <img src="images/ten.jpeg" className='rounded-[50%]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>A.R. Rahman</p>
                                <p className='text-[13px] leading-[25px]'>Artist</p>
                            </div>
                        </div>

                        <div>
                            <img src="images/eleven.jpeg" className='rounded-[50%] h-[170px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Arjit Singh</p>
                                <p className='text-[13px] leading-[25px]'>Artist </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/twelve.jpeg" className='rounded-[50%]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Pritam</p>
                                <p className='text-[13px] leading-[25px]'>Artist </p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Row - 3 */}



                <div>
                    <div className='flex leading-[30px] p-[15px] justify-between'>
                        <div className='font-bold'>Popular albums and singles</div>
                        <div className='text-[14px]'>Show all</div>
                    </div>
                    <div className='grid grid-cols-6 gap-[15px] p-[15px]'>
                        <div>
                            <img src="images/thirteen.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Raanjhan (From "Do Patti" )</p>
                                <p className='text-[13px] leading-[25px]'>Sachet-parampara, Parampara Tandon.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/fourteen.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Glory</p>
                                <p className='text-[13px] leading-[25px]'>Yo Yo Honey Singh </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/fifteen.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Sanam Teri Kasam (Original Fou..)</p>
                                <p className='text-[13px] leading-[25px]'> Himesh Reshammiya    ,Sammer Anjan,Sub..... </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/sixteen.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Young G.O.A.T</p>
                                <p className='text-[13px] leading-[25px]'>Chemma Y,Gur Sidhu</p>
                            </div>
                        </div>

                        <div>
                            <img src="images/seventeen.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Yeh Jawaani Hai Deewani</p>
                                <p className='text-[13px] leading-[25px]'>Pritam </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/eighteen.jpeg" className='rounded-[10px]' />
                            <div className='leading-[10px] text-left  p-[8px] font-bold rounded-[10px]'>
                                <p className='text-[17px] leading-[25px]'>Ashiqui 2</p>
                                <p className='text-[13px] leading-[25px]'>Mithoon,Ankit Tiwari Jeet Ganguli </p>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Row - 4 */}


                <div>
                    <div className='flex leading-[30px] p-[15px] justify-between'>
                        <div className='font-bold'>Popularity artists</div>
                        <div className='text-[14px]'>Show all</div>
                    </div>
                    <div className='grid grid-cols-6 gap-[15px] p-[15px]'>
                        <div >
                            <img src="images/nineteen.jpeg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>With Anuradha</p>
                                <p className='text-[14px] leading-[25px]'>Paudwal,Asha... </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/twenty.jpeg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>With Anirudh</p>
                                <p className='text-[14px] leading-[25px]'>RaviChandar,Yuvan... </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/t-one.jpeg" className='rounded-[10%] '  />
                            <div className='leading-[10px] text-left  p-[10px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>With Armaan Malik,</p>
                                <p className='text-[14px] leading-[25px]'>MohitChauhan,Ank..</p>
                            </div>
                        </div>

                        <div>
                            <img src="images/t-two.jpeg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>With Karan Aujla,</p>
                                <p className='text-[14px] leading-[25px]'>Subh,Sidhu Moose...</p>
                            </div>
                        </div>

                        <div>
                            <img src="images/t-three.jpeg" className='rounded-[10%] ' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>With Sachin Jigar,</p>
                                <p className='text-[14px] leading-[25px]'>Vishal Shekhar,Ami.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/t-four.jpeg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>With A.R Rahman,</p>
                                <p className='text-[14px] leading-[25px]'>Vishal Shekhar </p>
                            </div>
                        </div>
                    </div>
                </div>



                 {/* Row - 5 */}

                 <div>
                    <div className='flex leading-[30px] p-[15px] justify-between'>
                        <div className='font-bold'>Featured Charts</div>
                    </div>
                    <div className='grid grid-cols-6 gap-[15px] p-[15px]'>
                        <div >
                            <img src="images/ek.jpg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                            <p className='text-[14px] leading-[25px]'>Your weekly update </p>
                            <p className='text-[14px] leading-[25px]'>of the most played.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/do.jpg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                            <p className='text-[14px] leading-[25px]'>Your weekly update </p>
                            <p className='text-[14px] leading-[25px]'>of the most played.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/teen.jpg" className='rounded-[10%] '  />
                            <div className='leading-[10px] text-left  p-[10px]  rounded-[10px] font-bold'>
                            <p className='text-[14px] leading-[25px]'>Your weekly update </p>
                            <p className='text-[14px] leading-[25px]'>of the most played.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/char.jpg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                            <p className='text-[14px] leading-[25px]'>Your weekly update </p>
                            <p className='text-[14px] leading-[25px]'>of the most played.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/pach.jpg" className='rounded-[10%] ' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>Your weekly update </p>
                                <p className='text-[14px] leading-[25px]'>of the most played.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/chee.jpg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                            <p className='text-[14px] leading-[25px]'>Your weekly update </p>
                            <p className='text-[14px] leading-[25px]'>of the most played.. </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Row - 6 */}


                <div>
                    <div className='flex leading-[30px] p-[15px] justify-between'>
                        <div className='font-bold'>India's Best</div>
                        <div className='text-[14px]'>Show all</div>
                    </div>
                    <div className='grid grid-cols-6 gap-[15px] p-[15px]'>
                        <div >
                            <img src="images/j1.jpeg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>Ultimate 101 Punjabi </p>
                                <p className='text-[14px] leading-[25px]'>Hits with Jassie Gill </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/j2.jpeg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>Biggest Haryanvi hits </p>
                                <p className='text-[14px] leading-[25px]'>from last 10 years.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/j3.jpeg" className='rounded-[10%] '  />
                            <div className='leading-[10px] text-left  p-[10px]  rounded-[10px] font-bold'>
                            <p className='text-[14px] leading-[25px]'>Guruvayoorappa nin </p>
                            <p className='text-[14px] leading-[25px]'>munnil njan urukunn</p>
                            </div>
                        </div>

                        <div>
                            <img src="images/j4.jpeg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>Bollywood Central,  </p>
                                <p className='text-[14px] leading-[25px]'> jab baje toh seedha</p>
                            </div>
                        </div>

                        <div>
                            <img src="images/j5.jpeg" className='rounded-[10%] ' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>Hottest tracks from </p>
                                <p className='text-[14px] leading-[25px]'>your favourite I-Pop.. </p>
                            </div>
                        </div>

                        <div>
                            <img src="images/j6.jpeg" className='rounded-[10%]' />
                            <div className='leading-[10px] text-left  p-[8px]  rounded-[10px] font-bold'>
                                <p className='text-[14px] leading-[25px]'>India's Rap Scene.</p>
                                <p className='text-[14px] leading-[25px]'> Cover - YUNG DSA </p>
                            </div>
                        </div>
                   </div>
                </div>




                {/* Footer */}

                <div className=' w-full p-[50px] '>
                    <div className='grid grid-cols-5 justify-evenly pb-[80px]  '>
                        <ul className='leading-[20px] text-[16px] text-left'>
                            <li>Company</li>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>For the Record</li>
                        </ul>


                        <ul className='leading-[20px] text-[16px] text-left'>
                            <li>Communities</li>
                            <li>For Artists</li>
                            <li>Developers</li>
                            <li>Advertising</li>
                            <li>Investors</li>
                            <li>Vendors</li>
                        </ul>


                        <ul className='leading-[20px] text-[16px] text-left'>
                            <li>Useful links</li>
                            <li>Support</li>
                            <li>Free Mobile App</li>
                        </ul>

                        <ul className='leading-[20px] text-[16px] text-left'>
                            <li>Spotify Plans</li>
                            <li>Premium Individual</li>
                            <li>Premium Duo</li>
                            <li>Premium Family</li>
                            <li>Premium Student</li>
                            <li>Spotify Free</li>
                        </ul>

                        <ul className='leading-[20px] text-[16px] text-left flex justify-evenly'>
                            <li className='border h-[40px] p-[10px] rounded-[20px] bg-[rgb(41,41,41)]'><i class="fa-brands fa-instagram fa-xl"></i></li>
                            <li className='border h-[40px] p-[10px] rounded-[20px] bg-[rgb(41,41,41)]'><i class="fa-brands fa-twitter fa-xl"></i></li>
                            <li className='border h-[40px] p-[10px] rounded-[20px] bg-[rgb(41,41,41)]'><i class="fa-brands fa-facebook fa-xl"></i></li>
                        </ul>

                       

                    </div>

                    <hr />

                    <div className='leading-[40px] text-[16px] text-left mt-[30px]'>© 2025 Spotify AB</div>
                </div>

                
                

            </div>
        </div>
    )
}