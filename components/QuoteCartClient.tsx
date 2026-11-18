"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function QuoteCartClient() {
  const { cart, removeItem, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [rfqId, setRfqId] = useState("");
  const [submittedItems, setSubmittedItems] = useState<typeof cart>([]);
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
    procurementMode: "advance",
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
    setSubmittedItems([...cart]);
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    const whatsappMessage = `*OFFICIAL INSTITUTIONAL RFQ - Nuvamed Diagnostics / Magnus Diagnostics*
*Reference ID:* ${rfqId}

*Principal Investigator:* Dr. ${formData.piName}
*Institution:* ${formData.institute}
*Department:* ${formData.department || "N/A"}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*City:* ${formData.city} (PIN: ${formData.pincode})
*GSTIN:* ${formData.gstin || "N/A (Provide 5% DSIR / 18% GST split)"}
*Payment Terms:* Advance Payment (or Institutional PO)
${formData.notes ? `*Notes:* ${formData.notes}\n` : ""}
*Requested Products:*
${submittedItems
  .map(
    (item, idx) =>
      `${idx + 1}. ${item.name} [Cat #${item.catNo}] - Pack: ${item.packSize} - Qty: ${item.quantity}`
  )
  .join("\n")}

Please generate our formal INR Proforma Invoice with HSN Code 3822 00 90 and confirm delivery timeline.`;

    const whatsappUrl = `https://wa.me/919061381010?text=${encodeURIComponent(whatsappMessage)}`;

    const emailSubject = `[Institutional RFQ ${rfqId}] Dr. ${formData.piName} - ${formData.institute}`;
    const emailBody = `Dear Nuvamed / Magnus Diagnostics Procurement Team,

Please generate an official INR Proforma Invoice with HSN Code 3822 00 90 and DSIR 5% Concessional GST split for our institution.

Reference ID: ${rfqId}
Principal Investigator / Scientist: Dr. ${formData.piName}
Institute: ${formData.institute}
Department: ${formData.department || "N/A"}
Official Email: ${formData.email}
WhatsApp / Phone: ${formData.phone}
City & PIN: ${formData.city} - ${formData.pincode}
GSTIN: ${formData.gstin || "N/A"}
Procurement & Payment Terms: Advance Payment (or Institutional PO)
Special Notes: ${formData.notes || "None"}

Requested Items:
${submittedItems
  .map(
    (item, idx) =>
      `- ${item.name} | Cat #${item.catNo} | Pack Size: ${item.packSize} | Quantity: ${item.quantity}`
  )
  .join("\n")}

Thank you.`;

    const mailtoUrl = `mailto:info@magnusdiagnostics.in?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-2xl shadow-sm">
          ✓
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-2">
          Official Institutional RFQ Registered
        </h1>
        <p className="text-sm text-slate-600 mb-6 max-w-lg mx-auto">
          Thank you, <strong>Dr. {formData.piName}</strong> ({formData.institute}). Your formal quotation inquiry has been registered under Reference ID:
        </p>

        <div className="bg-slate-100 border border-slate-300 font-mono text-lg font-bold text-primary py-2 px-6 rounded-lg inline-block mb-6 shadow-inner">
          {rfqId}
        </div>

        {/* 1-Click Dispatch Action Cards */}
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-emerald-200/80 rounded-xl p-6 max-w-xl mx-auto text-left mb-6 shadow-sm">
          <div className="font-extrabold text-[#0b1d33] text-sm mb-2 flex items-center gap-2">
            <span>⚡ Instant Priority Dispatch to Procurement Desk</span>
            <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
              4-Hour SLA
            </span>
          </div>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Click below to instantly transmit your itemized quote request directly to our procurement team via official WhatsApp or Email:
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-extrabold py-3 px-4 rounded-lg shadow transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.84.5 3.56 1.37 5.04L2 22l5.12-1.34c1.43.78 3.06 1.22 4.92 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.27c-1.6 0-3.08-.43-4.37-1.18l-.31-.18-3.25.85.87-3.17-.2-.33a8.214 8.214 0 0 1-1.27-4.46c0-4.56 3.71-8.27 8.27-8.27 4.56 0 8.27 3.71 8.27 8.27 0 4.56-3.71 8.27-8.27 8.27zm4.53-6.2c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.17.25-.65.81-.8 1-.15.19-.3.21-.55.08-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.11-.22-.17-.47-.3z" />
              </svg>
              <span>Transmit to WhatsApp (+91 9061381010)</span>
            </a>

            <a
              href={mailtoUrl}
              className="flex-1 bg-[#0b1d33] hover:bg-[#143152] text-white text-xs font-extrabold py-3 px-4 rounded-lg shadow transition-all flex items-center justify-center gap-2"
            >
              <span>📧 Send via Email (info@magnusdiagnostics.in)</span>
            </a>
          </div>
        </div>

        {/* Itemized Reagent Summary */}
        {submittedItems.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-lg p-5 max-w-xl mx-auto text-left text-xs mb-6 shadow-sm">
            <div className="font-bold text-primary text-xs pb-2 border-b border-slate-100 flex justify-between">
              <span>Itemized Reagent Manifest ({submittedItems.length} items)</span>
              <span className="font-mono text-emerald-700">HSN: 3822 00 90</span>
            </div>
            <ul className="divide-y divide-slate-100 mt-2">
              {submittedItems.map((item, idx) => (
                <li key={idx} className="py-2 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800">{item.name}</span>
                    <span className="text-[11px] text-slate-500 font-mono block">
                      Cat #{item.catNo} &bull; Pack: {item.packSize}
                    </span>
                  </div>
                  <span className="font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                    Qty: {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Official Terms & Notice */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 max-w-xl mx-auto text-left text-xs space-y-2 mb-8 shadow-sm">
          <p className="text-slate-600 leading-relaxed">
            An official Proforma Invoice PDF in Indian Rupees (INR) with itemized unit pricing, HSN Code 3822 00 90, DSIR 5% Concessional GST split, and delivery timeline is queued for dispatch to <strong>{formData.email}</strong> with copy to <strong>info@magnusdiagnostics.in</strong>.
          </p>
          <div className="text-[11px] text-slate-500 pt-1">
            Documentation included: Authorized Distributor Undertaking by Nuvamed Diagnostics LLP Limited &bull; Lot-Specific COA &bull; Safety Data Sheet (SDS).
          </div>
          <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded p-2.5 text-[11px] leading-relaxed">
            <strong>💳 Order Fulfillment Notice:</strong> Order booking & lot allocation are confirmed upon <strong>Advance Payment only</strong> (or official Institutional Purchase Order wherever necessary and pre-approved).
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-2.5 px-5 rounded transition-colors"
          >
            Return to Product Catalog
          </Link>
          <Link
            href="/elisa-finder"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-5 rounded border border-slate-200 transition-colors"
          >
            Browse ELISA Library
          </Link>
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
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
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
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
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
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-primary block mb-1">Funding Mechanism *</label>
                  <select
                    value={formData.funding}
                    onChange={(e) => setFormData({ ...formData, funding: e.target.value })}
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none bg-white"
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
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
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
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
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
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
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
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
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
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold text-primary block mb-1">Preferred Procurement & Payment Terms *</label>
                  <select
                    value={formData.procurementMode}
                    onChange={(e) => setFormData({ ...formData, procurementMode: e.target.value })}
                    className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none bg-white font-medium"
                  >
                    <option value="advance">Advance Bank Transfer / NEFT / RTGS (Standard / Mandatory for Cold-Chain Reservation)</option>
                    <option value="po30">Institutional Purchase Order (Subject to pre-approval whenever necessary)</option>
                    <option value="gem">Government e-Marketplace (GeM) Direct Contract (Wherever applicable)</option>
                    <option value="tender">Rate Contract / Formal Tender Quotation</option>
                  </select>
                  <p className="text-[11px] text-slate-500 mt-1">
                    * Policy Notice: Order booking confirmed upon <strong>Advance Payment only</strong> (or official Institutional PO whenever necessary & verified).
                  </p>
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
                  className="w-full text-base sm:text-xs p-2.5 border border-slate-300 rounded focus:border-accent focus:outline-none"
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

          <div className="pt-4 border-t border-slate-200 space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-bold text-xs text-primary">Direct Procurement Desk</h4>
              <span className="font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                WhatsApp Active
              </span>
            </div>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Booking confirmed by <strong>Advance Payment only</strong> (or institutional PO whenever necessary). Direct inquiries can be routed via WhatsApp or Email:
            </p>
            <a
              href="https://wa.me/919061381010?text=Hello%20Nuvamed%20Diagnostics%2C%20I%20would%20like%20to%20inquire%20about%20products%2C%20pricing%20and%20institutional%20quotations."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 px-3 rounded block text-center transition-colors text-xs flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>💬 WhatsApp: +91 9061381010</span>
            </a>
            <a
              href="mailto:info@magnusdiagnostics.in?subject=Urgent%20Institutional%20Quote%20Assistance"
              className="w-full bg-[#0b1d33] hover:bg-[#143152] text-white font-bold py-2.5 px-3 rounded block text-center transition-colors text-xs"
            >
              Contact Desk: info@magnusdiagnostics.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
