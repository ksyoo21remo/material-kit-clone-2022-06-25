import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import React, { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { paths } from "../../../../../paths";
import { wait } from "../../../../../utils/wait";
import { Customer } from "../../types";

interface CustomerEditFormProps {
  customer: Customer;
}

export default function CustomerEditForm(
  props: PropsWithChildren<CustomerEditFormProps>,
) {
  const { customer } = props;

  const formik = useFormik({
    initialValues: {
      address1: customer.address1 || "",
      address2: customer.address2 || "",
      country: customer.country || "",
      email: customer.email || "",
      hasDiscount: customer.hasDiscount || false,
      isVerified: customer.isVerified || false,
      name: customer.name || "",
      phone: customer.phone || "",
      state: customer.state || "",
      submit: null,
    },
    validationSchema: Yup.object({
      address1: Yup.string().max(255),
      address2: Yup.string().max(255),
      country: Yup.string().max(255),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      hasDiscount: Yup.bool(),
      isVerified: Yup.bool(),
      name: Yup.string().max(255).required("Name is required"),
      phone: Yup.string().max(15),
      state: Yup.string().max(255),
    }),
    onSubmit: async (values, helpers): Promise<void> => {
      try {
        // NOTE: Make API request
        await wait(500);
        helpers.setStatus({ success: true });
        // toast.success('Customer updated!');
      } catch (err) {
        console.error(err);
        // toast.error('Something went wrong!');
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: (err as Error).message });
      } finally {
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "neutral.900"
              : "neutral.100",
        }}
      >
        <CardHeader title="Edit customer" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.name && formik.errors.name,
                )}
                fullWidth
                helperText={formik.touched.name && formik.errors.name}
                label="Full name"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.name}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.email && formik.errors.email,
                )}
                fullWidth
                helperText={
                  formik.touched.email && formik.errors.email
                }
                label="Email address"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                required
                value={formik.values.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.country && formik.errors.country,
                )}
                fullWidth
                helperText={
                  formik.touched.country && formik.errors.country
                }
                label="Country"
                name="country"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.country}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.state && formik.errors.state,
                )}
                fullWidth
                helperText={
                  formik.touched.state && formik.errors.state
                }
                label="State/Region"
                name="state"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.state}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.address1 && formik.errors.address1,
                )}
                fullWidth
                helperText={
                  formik.touched.address1 && formik.errors.address1
                }
                label="Address 1"
                name="address1"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.address1}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.address2 && formik.errors.address2,
                )}
                fullWidth
                helperText={
                  formik.touched.address2 && formik.errors.address2
                }
                label="Address 2"
                name="address2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.address2}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                error={Boolean(
                  formik.touched.phone && formik.errors.phone,
                )}
                fullWidth
                helperText={
                  formik.touched.phone && formik.errors.phone
                }
                label="Phone number"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Box>
              <Typography gutterBottom variant="subtitle1">
                Make Contact Info Public
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                sx={{ mt: 1 }}
              >
                Means that anyone viewing your profile will be able to
                see your contacts details
              </Typography>
            </Box>
            <Switch
              checked={formik.values.isVerified}
              color="primary"
              edge="start"
              name="isVerified"
              onChange={formik.handleChange}
              value={formik.values.isVerified}
            />
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography gutterBottom variant="subtitle1">
                Available to hire
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
                sx={{ mt: 1 }}
              >
                Toggling this will let your teammates know that you
                are available for acquiring new projects
              </Typography>
            </div>
            <Switch
              checked={formik.values.hasDiscount}
              color="primary"
              edge="start"
              name="hasDiscount"
              onChange={formik.handleChange}
              value={formik.values.hasDiscount}
            />
          </Box>
        </CardContent>
        <CardActions
          sx={{
            flexWrap: "wrap",
            m: -1,
          }}
        >
          <Button
            disabled={formik.isSubmitting}
            type="submit"
            sx={{ m: 1 }}
            variant="contained"
          >
            Update
          </Button>
          <RouterLink
            to={`/${paths.dashboard.root}/${paths.dashboard.customers.root}/${customer.id}`}
          >
            <Button
              disabled={formik.isSubmitting}
              sx={{
                m: 1,
                mr: "auto",
              }}
              variant="outlined"
            >
              Cancel
            </Button>
          </RouterLink>
          <Button color="error" disabled={formik.isSubmitting}>
            Delete user
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

CustomerEditForm.propTypes = {
  // @ts-ignore
  customer: PropTypes.object.isRequired,
};
