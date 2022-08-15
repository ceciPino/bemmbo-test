import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { TableCell, TableRow } from "@mui/material";

function InvoicesComponent({ invoices, setSelectedInvoice, selectedInvoice }) {
  const handleChecked = (invoice) => {
    if (selectedInvoice) {
      return selectedInvoice.id === invoice.id;
    }
    return false;
  };
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Facturas</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {invoices.map((invoice) => (
          <TableRow>
            <TableCell align="right">
              <FormControlLabel
                value={invoice.id}
                control={<Radio />}
                label={`${invoice.id} (${invoice.organization_id})`}
                name="boton"
                onChange={() => setSelectedInvoice(invoice)}
                checked={handleChecked(invoice)}
              />
            </TableCell>
          </TableRow>
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default InvoicesComponent;