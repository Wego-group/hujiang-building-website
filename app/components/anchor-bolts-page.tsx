"use client";

import { useState } from "react";
import { GlobalHeader } from "./global-header";
import { SiteFooter } from "./site-footer";

const products = [
  ["Straight Anchor Bolts", "Straight threaded fasteners for foundation connections and project-specific assemblies.", "straight"],
  ["L-Type Anchor Bolts", "Bent anchor bolts for securing structural components to concrete foundations.", "l-type"],
  ["J-Type Anchor Bolts", "Hooked anchor bolts for foundation fastening applications.", "j-type"],
  ["Anchor Bolt Assemblies", "Coordinated anchor bolt packages with plates, nuts and washers as specified.", "assembly"],
  ["Heavy Hex Nuts & Washers", "Fastener accessories for complete foundation bolt assemblies.", "nuts"],
  ["Anchor Plates & Plate Washers", "Plates and washers supplied to suit project drawings and connection details.", "plate"],
];
const specifications = [
  ["Diameter", "M16–M64 / Customized"], ["Thread", "Metric / UNC / UN / 8UN"],
  ["Strength Grade", "4.8 / 8.8 / 10.9 / As specified"], ["Materials", "Carbon Steel / 40Cr / 35CrMo / Alloy Steel"],
  ["Standards", "ISO / ASTM / EN / GB"], ["Surface Treatment", "HDG / Plain / Other specified finishes"],
  ["Accessories", "Heavy Hex Nuts, Washers, Anchor Plates"], ["Documentation", "MTC, Inspection Reports, Third-Party Inspection"],
];
const quality = [
  ["Raw Material Traceability", "Material certificates, heat numbers and production batches support traceability.", "material"],
  ["Mechanical Property Testing", "Testing can include tensile strength, yield strength, elongation and hardness, as required.", "testing"],
  ["Hot-Dip Galvanizing Control", "Coating thickness, appearance, thread fit and corrosion protection are checked against project requirements.", "threaded"],
  ["Final Inspection & Packaging", "Dimensions, nut fit, thread protection and export packaging are reviewed before delivery.", "inspection"],
];
function Heading({number, title}: {number: string; title: string}) { return <div className="section-title"><span>{number}</span><h2>{title}</h2></div>; }

export function AnchorBoltsPage() {
  const [product, setProduct] = useState(products[0][0]);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [grade, setGrade] = useState("");
  const [details, setDetails] = useState("");
  function quote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = [`Hello, I would like to request a quotation for anchor bolts.`, `Product Type: ${product}`, `Diameter / Size: ${size}`, `Quantity: ${quantity}`, `Material / Grade: ${grade || "Not specified"}`, `Additional Requirements: ${details || "Not specified"}`].join("\n");
    window.open(`https://wa.me/8615168862952?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  function selectProduct(name: string) { setProduct(name); }
  return <main className="anchor-page">
    <GlobalHeader active="products" />
    <section className="layer-hero anchor-hero">
      <img src="/images/anchor-bolts/hero.jpeg" alt="Anchor bolts prepared for delivery" />
      <div className="layer-hero-shade" />
      <div className="wide-container layer-hero-content">
        <p className="eyebrow">ANCHOR BOLTS &amp; FOUNDATION FASTENERS</p>
        <h1>Anchor Bolts &amp; Foundation Fastening Systems</h1>
        <p>High-strength, custom manufactured fastening solutions for steel structures and industrial construction projects.</p>
        <div className="anchor-actions"><a className="round-button" href="#anchor-quote">Request a Quote <i>→</i></a><a className="anchor-hero-link" href="#anchor-products">View Products ↓</a></div>
        <div className="breadcrumb"><a href="/">Home</a> / Products / Anchor Bolts</div>
      </div>
    </section>
    <section className="patterned" id="anchor-products"><div className="wide-container section-padding">
      <Heading number="01" title="Anchor Bolt Products" />
      <p className="section-intro">Explore foundation fastening components and complete packages tailored to project drawings and requirements.</p>
      <div className="anchor-products-grid">{products.map(([name, description, image]) => <article className="anchor-product" key={name}>
        <div className="anchor-product-image"><img src={image === "j-type" ? "/images/anchor-bolts/j-type-clean.png" : `/images/anchor-bolts/${image}.jpeg`} alt={name} /></div>
        <div className="anchor-product-copy"><h3>{name}</h3><p>{description}</p><a href="#anchor-quote" onClick={() => selectProduct(name)}>Request a quote <span>→</span></a></div>
      </article>)}</div>
    </div></section>
    <section className="anchor-specs"><div className="wide-container section-padding">
      <Heading number="02" title="Technical Specifications" />
      <p className="section-intro">A guide to the proposed supply range for foundation fastening projects.</p>
      <div className="anchor-table-wrap"><table><tbody>{specifications.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody></table></div>
      <p className="anchor-note">Specifications, grades, production capabilities and documentation are subject to factory confirmation and approved project requirements.</p>
    </div></section>
    <section className="patterned"><div className="wide-container section-padding">
      <Heading number="03" title="Quality Control" />
      <p className="section-intro">From material identification to final packaging, inspection requirements are coordinated with each project.</p>
      <div className="anchor-quality-grid">{quality.map(([title, copy, image], i) => <article key={title}><img src={`/images/anchor-bolts/${image}.jpeg`} alt="" /><div><b>0{i+1}</b><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      <p className="anchor-note">Where specified, ASTM F2329/F2329M may apply to fasteners and ASTM A123/A123M to applicable plates and steel components. The applicable standard depends on the product and contract requirements.</p>
    </div></section>
    <section className="anchor-facility"><div className="wide-container anchor-facility-grid"><div><p className="eyebrow dark">OUR MANUFACTURING FACILITY</p><h2>Built around your project requirements.</h2><p><strong>CHINA MEGASTEEL GROUP CO., LTD.</strong><br />Anchor Bolt Manufacturing Facility: Handan Ruihou Fastener Manufacturing Co., Ltd.</p><p>Located in Yongnian District, Handan City, Hebei Province, China, the facility supports the supply of customized foundation fastening systems for international engineering projects.</p><p>Manufacturing solutions can include material preparation, machining, threading, heat treatment for applicable grades, surface treatment, assembly, inspection and export packaging, according to project requirements.</p></div><img src="/images/anchor-bolts/material.jpeg" alt="Steel material prepared for manufacturing" /></div></section>
    <section className="anchor-quote" id="anchor-quote"><div className="wide-container anchor-quote-grid"><div><p className="eyebrow dark">REQUEST A QUOTATION</p><h2>Tell us what your project needs.</h2><p>Share your requirements for a customized quotation. Your details will be prepared in a WhatsApp message for you to review and send.</p></div>
      <form onSubmit={quote}><label className="anchor-full">Product Type<select value={product} onChange={e => setProduct(e.target.value)}>{products.map(([name]) => <option key={name}>{name}</option>)}</select></label><label>Diameter / Size<input value={size} onChange={e => setSize(e.target.value)} placeholder="e.g. M24 × 450" required /></label><label>Quantity<input value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="e.g. 500 sets" required /></label><label className="anchor-full">Material / Grade<input value={grade} onChange={e => setGrade(e.target.value)} placeholder="e.g. ISO 898-1 Gr. 8.8" /></label><label className="anchor-full">Additional Requirements<textarea value={details} onChange={e => setDetails(e.target.value)} placeholder="HDG, drawings, inspection requirements, delivery destination..." rows={4} /></label><button className="round-button anchor-full" type="submit">Send RFQ via WhatsApp <i>→</i></button></form>
    </div></section>
    <SiteFooter />
  </main>;
}
