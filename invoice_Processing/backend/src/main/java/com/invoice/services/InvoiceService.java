package com.invoice.services;

import java.util.List;

import com.invoice.model.Invoice;

public interface InvoiceService {
	
	public Invoice addInvoice (Invoice invoice);
    public List<Invoice> getInvoices ();
    public Invoice deleteInvoice(long id);
}
