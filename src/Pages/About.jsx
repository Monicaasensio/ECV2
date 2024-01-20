import React from 'react'
import './CSS/About.css'
import SizingChart from '../Components/Assets/Women-Sizes-Chart.png'

export default function About() {
  return (
    <div className='about'>
            <h1>About MLA</h1>
        <div class="about-me">
            <p>Monica Asensio is a creative and entrepreneurial spirit who embarked on a artsy journey during an extended visit home. With a passion for crafting and an eye for design, Monica decided to take a try at crochet. What started as a simple hobby quickly evolved into a full-fledged venture, where she expertly weaves together her artistic talents and entrepreneurial drive. Monica's dedication and innovative approach has transformed her passion into a successful crochet business. Through her unwavering determination and crafty expertise, Monica has beautifully crocheted her way to success, proving that with dedication and a dash of creativity, one can turn their hobbies into a fulfilling and prosperous career.</p>
        </div>
        <div className="return-policy">
            <h1>Return Policy</h1>
          <div class="return-policy">
            <p>At MLA Crochet, we strive to provide our customers with the highest quality crochet items.</p>
            <p>If for any reason you are not completely satisfied with your purchase, please review our return policy below:</p>
                <ol>
                    <li>Returns:</li>
                        <ul>
                            <li>We accept returns within 30 days of the date of delivery.</li>
                            <li>To be eligible for a return, your item must be unused, in the same condition as when you received it, and in its original packaging.</li>
                        </ul>
                    <li>Exchanges:</li>
                        <ul>
                            <li>If you received a damaged or defective item, we will happily exchange it for the same item.</li>
                            <li>We do not offer exchanges for different products.</li>
                        </ul>
                    <li>Refunds:</li>
                        <ul>
                            <li>Upon receiving the returned item and inspecting it, we will notify you of the status of your refund.</li>
                            <li>If your return is approved, we will initiate a refund to your original payment method.</li>
                            <li>Shipping fees are non-refundable.</li>
                        </ul>
                    <li>Refunds:</li>
                        <ul>
                            <li>Upon receiving the returned item and inspecting it, we will notify you of the status of your refund.</li>
                            <li>If your return is approved, we will initiate a refund to your original payment method.</li>
                            <li>Shipping fees are non-refundable.</li>
                        </ul>
                </ol>
            <p>This return policy is subject to change without prior notice, so please review it periodically.</p>
            <h2>Conact below for issues with orders/returns</h2>
            <button>Contact Us</button>
          </div>
        <div className="size-chart">
            <h1>MLA Sizing Chart</h1>
            <img src={SizingChart} alt="size chart" />
        <div class="size-btns">
            <a href="/products"><button>Explore our collection</button></a>
            <a href="/contact"><button>Place a custom order</button></a>
        </div>
        </div>
        </div>
    </div>
  )
}
