"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retailerAccepted = exports.addUser = exports.forgotPassword = exports.orderCancelled = exports.UserLogin = exports.UserVerify = exports.UserSignUp = exports.OrderCreated = exports.OrderStatus = void 0;
const OrderStatus = (status, orderName) => `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Status Update</title>
      </head>
      <body>
        <div style="font-family: Arial, sans-serif; background-color: #232f3e; padding: 20px; border: 1px solid #ddd; color: #fff;">
          <p style="font-size: 18px; margin: 0;">Hello there,</p>
          <p style="font-size: 16px; margin: 10px 0;">Your Order Status is Updated to <strong>${status}</strong></p>
          <p style="font-size: 14px; margin: 5px 0;">Item <strong>${orderName}</strong></p>
        </div>
      </body>
      </html>      
`;
exports.OrderStatus = OrderStatus;
const OrderCreated = (customerName, orderDate, orderTotal, shippingAddress, paymentMethod, orderItems) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f2f2f2; margin: 0; padding: 0;">

  <!-- Header -->
  <div style="background-color: #232f3e; color: #fff; text-align: center; padding: 20px;">
    <h2>Order Confirmation</h2>
  </div>

  <!-- Order Details -->
  <div style="padding: 20px;">
    <p>Hello ${customerName},</p>
    <p>Thank you for your order!</p>

    <h3>Order Details</h3>
    <p>Order Date: ${orderDate}</p>
    <p>Order Total: ${orderTotal}</p>

    <h3>Shipping Address</h3>
    <p>${shippingAddress}</p>

    <h3>Payment Method</h3>
    <p>${paymentMethod}</p>

    <h3>Ordered Items</h3>
    <ul>${orderItems.map((item) => `<li> ItemName: ${item.variant.name} -Quantity: ${item.quantity} - Price: ${item.price} </li>`)}
    </ul>

    <p>For any questions or concerns, please contact our customer support at support@example.com.</p>
    <p>Thank you for shopping with us!</p>
  </div>

  <!-- Footer -->
  <div style="background-color: #232f3e; color: #fff; text-align: center; padding: 10px;">
    <p>&copy; 2023 Tarweej.com. All rights reserved.</p>
  </div>

</body>
</html>


`;
exports.OrderCreated = OrderCreated;
const UserSignUp = (userName, userEmail) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Sign Up Notification</h1>
        </div>
        <p>Hello ${userName},</p>
        <p>Thank you for signing up on our platform! We're excited to have you join our community.</p>
        <p>Your account details:</p>
        <ul>
            <li><strong>Name:</strong> ${userName}</li>
            <li><strong>Email:</strong> ${userEmail}</li>
            <!-- Add more account details if needed -->
        </ul>
        <p>If you have any questions or need assistance, feel free to contact our support team.</p>
        <p>Best regards,</p>
        <p>The Tarweej Team</p>
    </div>
</body>
</html>
`;
exports.UserSignUp = UserSignUp;
const UserVerify = (userName, link) => `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>User Verification Alert</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>User Verification Alert</h1>
          </div>
          <p>Hello ${userName},</p>
          <p>Verify yourself by clicking on this link ${link}</p>
          <p>If you have any questions or need assistance, feel free to contact our support team.</p>
          <p>Best regards,</p>
          <p>The Tarweej's Team</p>
      </div>
  </body>
  </html>
  `;
exports.UserVerify = UserVerify;
const UserLogin = (userName) => `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Tarweej - Account Login Alert</title>
    <style>
        /* Add your styling here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        .message {
            padding: 20px;
        }
        .button {
            display: inline-block;
            background-color: #ff9900;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 3px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="" alt="Tarweej Logo" width="120">
        </div>
        <div class="message">
            <h2>Account Login Alert</h2>
            <p>Hello ${userName},</p>
            <p>We noticed a recent login to your Tarweej account. If you authorized this activity, you can disregard this email.</p>
            <p>If you did not perform this action, we recommend taking these steps:</p>
            <ol>
                <li>Change your Tarweej password immediately.</li>
                <li>Review your account settings for any unauthorized changes.</li>
                <li>Contact our support team if you need assistance or have concerns.</li>
            </ol>
            <p>Thank you for choosing Tarweej!</p>
        </div>
        <hr>
        <p>If you have any questions or need help, please visit our <a href=" ">Help & Customer Service</a> page.</p>
    </div>
</body>
</html>
`;
exports.UserLogin = UserLogin;
const orderCancelled = (customerName, orderId) => `
<!DOCTYPE html>
<html>
<head>
    <title>Order Cancellation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        h2 {
            color: #e74c3c;
        }
        p {
            color: #333333;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Order Cancellation</h2>
        <p>Dear ${customerName},</p>
        <p>We regret to inform you that your order with reference id${orderId} has been cancelled.</p>
        <p>If you believe this is an error or have any questions, please don't hesitate to contact our customer support.</p>
        <p>We apologize for any inconvenience this may have caused.</p>
        <p>Thank you for considering Tarweej.</p>
        <p>Sincerely,</p>
        <p>The Tarweej Team</p>
    </div>
</body>
</html>

`;
exports.orderCancelled = orderCancelled;
const forgotPassword = (otp) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
</head>
<body>
    <p>Hello,</p>
    <p>You have requested to reset your password. Please enter the OTP below to set your new password:</p>
    <p>OTP: ${otp}</p>
    <br />
    <p>If you did not make this request, you can safely ignore this email.</p>
    <p>Thank you!</p>
</body>
</html>`;
exports.forgotPassword = forgotPassword;
const addUser = (userName, userEmail, userRole) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Sign Up Notification</h1>
        </div>
        <p>Hello ${userName},</p>
        <p>Congrats you have been added as ${userRole} to our platform! We're excited to have you join our community.</p>
        <p>Your account details:</p>
        <ul>
            <li><strong>Name:</strong> ${userName}</li>
            <li><strong>Email:</strong> ${userEmail}</li>
            <!-- Add more account details if needed -->
        </ul>
        <p>NOTE: This is temporary password we recommend you to set a new password</p>
        <p>If you have any questions or need assistance, feel free to contact our support team.</p>
        <p>Best regards,</p>
        <p>The Tarweej Team</p>
    </div>
</body>
</html>`;
exports.addUser = addUser;
const retailerAccepted = (userName, userEmail, userRole) => `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verification  Notification</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Sign Up Notification</h1>
          </div>
          <p>Hello ${userName},</p>
          <p>Congrats you have been added as ${userRole} to our platform! We're excited to have you join our community.</p>
          <p>Your account details:</p>
          <ul>
              <li><strong>Name:</strong> ${userName}</li>
              <li><strong>Email:</strong> ${userEmail}</li>
              <!-- Add more account details if needed -->
          </ul>
          <p>If you have any questions or need assistance, feel free to contact our support team.</p>
          <p>Best regards,</p>
          <p>The Tarweej Team</p>
      </div>
  </body>
  </html>`;
exports.retailerAccepted = retailerAccepted;
