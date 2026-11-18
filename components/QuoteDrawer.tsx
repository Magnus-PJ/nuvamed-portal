"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function QuoteDrawer() {
  const { cart, isDrawerOpen, setDrawerOpen, removeItem, updateQuantity } = useCart();

  if (!isDrawerOpen) return null;

  const ambientItems = cart.filter((i) => i.shipping.toLowerCase().includes("ambient"));
  const coldItems = cart.filter((i) => !i.shipping.toLowerCase().includes("ambient"));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <aside className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="px-5 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary font-extrabold text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Institutional Quote List</span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-slate-400 hover:text-slate-700 text-xl font-bold p-1 leading-none"
              aria-label="Close Drawer"
            >
              &times;
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <svg
                  className="mx-auto mb-3 text-slate-300"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p className="font-semibold text-slate-700 text-sm">Your quote list is currently empty.</p>
                <p className="text-xs text-slate-500 mt-1">
                  Add products from the catalog to generate a formal INR proforma quote.
                </p>
              </div>
            ) : (
              <>
                {/* Cold Chain Group */}
                {coldItems.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase text-cold tracking-wider bg-cold-light border border-cold-border px-2 py-1 rounded">
                      <span>❄️ Cold-Chain Shipment (-20°C / Blue Ice)</span>
                    </div>
                    {coldItems.map((item) => (
                      <div
                        key={item.id}
                        className="border border-slate-200 rounded p-3 bg-white text-xs space-y-2"
                      >
                        <div className="font-bold text-primary">{item.name}</div>
                        <div className="flex justify-between text-slate-500 text-[11px]">
                          <span className="font-mono">Cat #{item.catNo} | Pack: {item.packSize}</span>
                          <span className="text-emerald-700 font-bold">Price on request</span>
                        </div>
                        <div className="flex justify-between items-center pt-1 border-t border-slate-100">
                          <div className="flex items-center border border-slate-200 rounded overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 bg-slate-100 text-slate-700 font-bold hover:bg-slate-200"
                            >
                              -
                            </button>
                            <span className="px-2 font-mono font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 bg-slate-100 text-slate-700 font-bold hover:bg-slate-200"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 font-semibold hover:text-red-700 text-[11px]"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ambient Group */}
                {ambientItems.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase text-slate-600 tracking-wider bg-slate-100 border border-slate-200 px-2 py-1 rounded">
                      <span>📦 Ambient Standard Shipment (15–25°C)</span>
                    </div>
                    {ambientItems.map((item) => (
                      <div
                        key={item.id}
                        className="border border-slate-200 rounded p-3 bg-white text-xs space-y-2"
                      >
                        <div className="font-bold text-primary">{item.name}</div>
                        <div className="flex justify-between text-slate-500 text-[11px]">
                          <span className="font-mono">Cat #{item.catNo} | Pack: {item.packSize}</span>
                          <span className="text-emerald-700 font-bold">Price on request</span>
                        </div>
                        <div className="flex justify-between items-center pt-1 border-t border-slate-100">
                          <div className="flex items-center border border-slate-200 rounded overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 bg-slate-100 text-slate-700 font-bold hover:bg-slate-200"
                            >
                              -
                            </button>
                            <span className="px-2 font-mono font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 bg-slate-100 text-slate-700 font-bold hover:bg-slate-200"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 font-semibold hover:text-red-700 text-[11px]"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
              <p className="text-[11px] text-slate-500 leading-normal">
                ⚡ <strong>Logistics Optimization:</strong> Ambient kits (cfDNA) and cold-chain items ship under separate airway bills to save on unnecessary thermal packing surcharges.
              </p>
              <Link
                href="/quote-cart"
                onClick={() => setDrawerOpen(false)}
                className="w-full bg-accent hover:bg-accent-hover text-white text-center font-bold py-2.5 px-4 rounded block text-sm shadow-md transition-colors"
              >
                Proceed to Institutional Proforma Form &rarr;
              </Link>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
