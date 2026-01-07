import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

const API_BASE_URL = "http://localhost:5000";

const ScheduleCallModal = ({ open, onClose }) => {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Fetch available slots when date changes
  useEffect(() => {
    const fetchSlots = async () => {
      if (!date) return;
      
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/availability?date=${date}`);
        const data = await response.json();
        
        if (response.ok) {
          setSlots(data);
        } else {
          setSnackbar({
            open: true,
            message: data.error || "Failed to fetch available slots",
            severity: "error"
          });
        }
      } catch (error) {
        setSnackbar({
          open: true,
          message: "Error connecting to the server",
          severity: "error"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, [date]);

  const handleConfirm = async () => {
    if (!selectedSlot) {
      setSnackbar({
        open: true,
        message: "Please select a time slot",
        severity: "warning"
      });
      return;
    }

    if (!form.name || !form.email) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "warning"
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/book-call`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          start: selectedSlot.start,
          end: selectedSlot.end,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Call scheduled successfully!",
          severity: "success"
        });
        onClose();
      } else {
        throw new Error(data.message || "Failed to book call");
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message,
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <>
      <Dialog open={open} onClose={!loading ? onClose : undefined} maxWidth="sm" fullWidth>
        <DialogTitle>Schedule a Support Call</DialogTitle>

        <DialogContent>
          {/* Name and Email */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                disabled={loading}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                disabled={loading}
                sx={{ mb: 2 }}
                required
              />
            </Grid>
          </Grid>

          {/* Date Picker */}
          <TextField
            fullWidth
            type="date"
            label="Select Date"
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 3 }}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setSelectedSlot(null);
            }}
            disabled={loading}
            inputProps={{
              min: new Date().toISOString().split('T')[0],
            }}
          />

          {/* Time Slots */}
          <Typography variant="subtitle1" gutterBottom>
            Available Time Slots
          </Typography>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Available Slots
          </Typography>

          <Grid container spacing={1} sx={{ mb: 3, minHeight: '80px' }}>
            {loading ? (
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress size={24} />
              </Grid>
            ) : slots.length > 0 ? (
              slots.map((slot, index) => (
                <Grid item key={index}>
                  <Button
                    variant={selectedSlot?.start === slot.start ? "contained" : "outlined"}
                    onClick={() => setSelectedSlot(slot)}
                    disabled={loading}
                  >
                    {formatTime(slot.start)} - {formatTime(slot.end)}
                  </Button>
                </Grid>
              ))
            ) : date ? (
              <Grid item xs={12}>
                <Typography color="textSecondary">No available slots for this date</Typography>
              </Grid>
            ) : null}
          </Grid>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button 
            onClick={onClose} 
            color="inherit"
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirm}
            disabled={!selectedSlot || !form.name || !form.email || loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? 'Scheduling...' : 'Confirm Booking'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ScheduleCallModal;

export { API_BASE_URL };
