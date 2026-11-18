"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function QuoteCartPage() {
  const { cart, removeItem, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [rfqId, setRfqId] = useState("");
  const [formData, setFormData] = useState({
    piName: "",
    institute: "",
    department: "",
    funding: "grant",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    gstin: "",
    procurementMode: "po30",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Please add at least one product to your quote list before submitting.");
      return;
    }
    const newId = `IN-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqId(newId);
    setSubmitted(true);
    clearCart();
  };

  const ambientItems = cart.filter((i) => i.shipping.toLowerCase().includes("ambient"));
  const coldItems = cart.filter((i) => !i.shipping.toLowerCase().includes("ambient"));

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-2xl">
          ✓
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">
          Official Institutional RFQ Received
        </h1>
        <p className="text-sm text-slate-600 mb-6 max-w-lg mx-auto">
          Thank you, <strong>Dr. {formData.piName}</strong> ({formData.institute}). Your formal quotation inquiry has been registered under Reference ID:
        </p>

        <div className="bg-slate-100 border border-slate-300 font-mono text-lg font-bold text-primary py-2 px-4 rounded inline-block mb-6">
          {rfqId}
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-xl mx-auto text-left text-xs space-y-3 mb-8 shadow-sm">
          <div className="font-bold text-primary text-sm border-b border-slate-100 pb-2">
            SLA Commitment: 4 Working Hours &bull; Nuvamed Diagnostics Desk
          </div>
          <p className="text-slate-600">
            An official Proforma Invoice PDF in Indian Rupees (INR) with itemized unit pricing, HSN Code 3822 00 90, DSIR 5% Concessional GST split, and delivery timeline will be dispatched to <strong>{formData.email}</strong> and WhatsApp (<strong>{formData.phone}</strong>), with a copy routed to the procurement desk at <strong>nuvameddx@gmail.com</strong>.
          </p>
          <div className="text-[11px] text-slate-500 pt-1">
            Documentation included: Authorized Distributor Undertaking by Nuvamed Diagnostics LLP Limited &bull; Lot-Specific COA &bull; Safety Data Sheet (SDS).
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-2.5 px-5 rounded transition-colors"
          >
            Return to Product Catalog
          </Link>
          <a
            href={`https://wa.me/919400000000?text=Hello%20Nuvamed%20Diagnostics%20India,%20I%20have%20submitted%20Quote%20Request%20${encodeURIComponent(rfqId)}%20for%20Dr.%20${encodeURIComponent(formData.piName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-5 rounded transition-colors flex items-center gap-1.5"
          >
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-primary">
          Institutional Quote Request & Proforma Generation
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Complete the details below to receive an official formal proforma invoice tailored for Indian central/state universities, IITs, AIIMS, CSIR/DBT/ICMR labs, and biopharma R&D facilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Cols: Products + Form */}
        <div className="lg:col-span-8 space-y-8">
          {/* Cart review */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="font-extrabold text-base text-primary mb-4 flex justify-between items-center">
              <span>1. Selected Reagents & Pack Sizes</span>
              <span className="font-mono text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                Price on Request
              </span>
            </h2>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-slate-500 text-xs">
                Your quote list has no products.{" "}
                <Link href="/" className="text-accent font-bold underline">
                  Browse lead reagents
                </Link>{" "}
                to add items.
              </div>
            ) : (
              <div className="border border-slate-200 rounded overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="p-3">Product Description</th>
                      <th className="p-3">Pack Size</th>
                      <th className="p-3">Shipping Spec</th>
                      <th className="p-3 text-center">Qty</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {cart.map((item) => {
                      const isCold = !item.shipping.toLowerCase().includes("ambient");
                      return (
                        <tr key={item.id}>
                          <td className="p-3">
                            <div className="font-bold text-primary">{item.name}</div>
                            <div className="font-mono text-[11px] text-slate-500">
                              Cat #{item.catNo} | SKU: {item.sku}
                            </div>
                          </td>
                          <td className="p-3 font-semibold text-slate-700">{item.packSize}</td>
                          <td className="p-3">
                            <span
                              className={`font-mono text-[10px] px-1.5 py-0.5 rounded font-bold ${
                                isCold
                                  ? "bg-cold-light text-cold border border-cold-border"
                                  : "bg-slate-100 text-slate-700 border border-slate-200"
                              }`}
                            >
                              {item.shipping}
                            </span>
                          </td>
                          <td className="p-3 text-center font-mono font-bold">{item.quantity}</td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 font-semibold"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Institutional Procurement Form */}
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="font-extrabold text-base text-primary mb-1">
              2. Institutional Procurement & Investigator Details
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Required to generate your formal GST-compliant proforma invoice in INR.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-primary block mb-1">
                    Principal Investigator / Scientist Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.piName}
                    onChange={(e) => setFormData({ ...formData, piName: e.target.value })}
                    placeholder="Dr. Anita Sharma"
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-primary block mb-1">
                    Institute / University / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institute}
                    onChange={(e) => setFormData({ ...formData, institute: e.target.value })}
                    placeholder="e.g. AIIMS New Delhi / IISc / RGCB"
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-primary block mb-1">Department / Laboratory</label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="Dept of Biotechnology / Genomics Core"
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-primary block mb-1">Funding Mechanism *</label>
                  <select
                    value={formData.funding}
                    onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none bg-white"
                  >
                    <option value="grant">Extramural Grant (DBT / SERB / ICMR / CSIR)</option>
                    <option value="core">Institute Core Budget</option>
                    <option value="industry">Corporate Biotech R&D Fund</option>
                    <option value="personal">Individual Research Scholar Fund</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-primary block mb-1">Official Academic Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="asharma@aiims.edu"
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-primary block mb-1">WhatsApp / Contact Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-primary block mb-1">Delivery City & State *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Bengaluru, Karnataka"
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-primary block mb-1">Pincode *</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="e.g. 560012"
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-primary block mb-1">
                    GSTIN Number (Optional - for Concessional 5% GST or 18% ITC)
                  </label>
                  <input
                    type="text"
                    value={formData.gstin}
                    onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                    placeholder="e.g. 07AAACA0000A1Z5"
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-primary block mb-1">Preferred Procurement Channel</label>
                  <select
                    value={formData.procurementMode}
                    onChange={(e) => setFormData({ ...formData, procurementMode: e.target.value })}
                    className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none bg-white"
                  >
                    <option value="po30">Institutional Purchase Order (30-Day Credit Terms)</option>
                    <option value="gem">Government e-Marketplace (GeM) Direct Contract</option>
                    <option value="advance">Advance Bank Transfer / NEFT / RTGS</option>
                    <option value="tender">Rate Contract / Formal Tender Quotation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-primary block mb-1">
                  Special Requirements, Target Delivery Date or Custom Packaging
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Specify if lot-reservation is required, or if applying for the free evaluation pack pilot..."
                  className="w-full p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={cart.length === 0}
                className="w-full bg-accent hover:bg-accent-hover disabled:bg-slate-300 text-white font-extrabold text-sm py-3 rounded shadow transition-colors"
              >
                Submit Institutional RFQ (Guaranteed 4-Hour Response)
              </button>
              <p className="text-[11px] text-slate-500 text-center">
                🔒 Proforma invoices generated with 30 days price validity in INR. Authorized India Distribution Channel.
              </p>
            </form>
          </div>
        </div>

        {/* Right 4 Cols: Service SLA & Paperwork */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-lg p-6 shadow-sm sticky top-28 space-y-6 text-xs">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                SLA Guarantee
              </span>
              <h3 className="font-extrabold text-sm text-primary">What Happens Next?</h3>
            </div>
            <div className="space-y-3 text-slate-600 leading-relaxed">
              <div className="flex gap-2">
                <span className="font-mono font-bold text-accent">1.</span>
                <span><strong>4-Hour Quote Turnaround:</strong> An official INR Proforma Invoice detailing unit pricing, GST classification, and HSN codes is prepared.</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono font-bold text-accent">2.</span>
                <span><strong>Optimized Freight Segregation:</strong> Ambient items and cold-chain reagents ship under separate airway bills to save freight.</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono font-bold text-accent">3.</span>
                <span><strong>Audit Documentation:</strong> Accompanied by Authorized Distributor Certificate, Proprietary Article Certificate (PAC), and batch-matched COA.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <h4 className="font-bold text-xs text-primary mb-1">Direct Technical Support</h4>
            <p className="text-slate-500 text-[11px] mb-3">
              Have an urgent purchase committee deadline today? Speak with our technical sales scientist.
            </p>
            <a
              href="https://wa.me/919400000000?text=Urgent%20Quote%20Request%20Assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded block text-center transition-colors"
            >
              Connect on WhatsApp (+91 94000 00000)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
