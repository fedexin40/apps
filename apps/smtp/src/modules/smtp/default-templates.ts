import { MessageEventTypes } from "../event-handlers/message-event-types";

const addressSection = `<mj-section>
  <mj-column>
    <mj-table>
      <thead>
        <tr>
          <th>
            Billing address
          </th>
          <th>
            Shipping address
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {{#if order.billingAddress}}
              {{ order.billingAddress.streetAddress1 }}
            {{else}}
              No billing address
            {{/if}}
          </td>
          <td>
            {{#if order.shippingAddress}}
              {{ order.shippingAddress.streetAddress1}}
            {{else}}
              No shipping required
            {{/if}}
          </td>
        </tr>
      </tbody>
    </mj-table>
  </mj-column>
</mj-section>
`;

const addressSectionForNotify = `<mj-section>
  <mj-column>
    <mj-table>
      <thead>
        <tr>
          <th>
            Billing address
          </th>
          <th>
            Shipping address
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {{#if order.billing_address}}
              {{ order.billing_address.street_address_1 }}
            {{else}}
              No billing address
            {{/if}}
          </td>
          <td>
            {{#if order.shipping_address}}
              {{ order.shipping_address.street_address_1}}
            {{else}}
              No shipping required
            {{/if}}
          </td>
        </tr>
      </tbody>
    </mj-table>
  </mj-column>
</mj-section>
`;

const orderLinesSection = `<mj-section>
  <mj-column>
    <mj-table>
      <tbody>
        {{#each order.lines }}
          <tr>
            <td>
              {{ this.quantity }} x {{ this.productName }} - {{ this.variantName }}
            </td>
            <td align="right">
              {{ this.totalPrice.gross.amount }} {{ this.totalPrice.gross.currency }}
            </td>
          </tr>
        {{/each}}
        <tr>
          <td>
          </td>
          <td align="right">
            Shipping: {{ order.shippingPrice.gross.amount }} {{ order.shippingPrice.gross.currency }}
          </td>
        </tr>
        <tr>
          <td>
          </td>
          <td align="right">
            Total: {{ order.total.gross.amount }} {{ order.total.gross.currency }}
          </td>
        </tr>
      </tbody>
    </mj-table>
  </mj-column>
</mj-section>
`;

const defaultOrderCreatedMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hello!
        </mj-text>
        <mj-text>
          Order {{ order.number }} has been created.
        </mj-text>
      </mj-column>
    </mj-section>
    ${addressSection}
    ${orderLinesSection}
  </mj-body>
</mjml>`;

const defaultOrderFulfilledMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section border-left="2px solid #dbb393">
      <mj-column width="100%">
        <mj-image align="center" width="150px" src="https://shop.proyecto705.com/_next/image?url=%2FlogoNegro.png&w=640&q=75" />
      </mj-column>
    </mj-section>
    <mj-section border-left="2px solid #dbb393">
      <mj-column width="100%">
        <mj-text font-size="16px" letter-spacing="1px">
          Hola {{order.billingAddress.firstName}} !
        </mj-text>
        <mj-text letter-spacing="1px" line-height="20px">
          Seguimos que no cabemos de emoción por tu compra, y esperamos que la disfrutes tanto como nostros.
        </mj-text>
        <mj-spacer height="50px" />
        <mj-text font-size="15px" letter-spacing="1px" line-height="20px">
          Información de envío
        </mj-text>
        <mj-text letter-spacing="1px" line-height="10px">
          Paqueteria: {{ order.shippingMethodName }}
        </mj-text>
        <mj-text letter-spacing="1px" line-height="20px">
          Número de rastreo: {{ order.fulfillment.trackingNumber }}
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section border-left="2px solid #dbb393">
      <mj-column>
        <mj-divider border-width="1px" border-color="lightgrey"/>
        <mj-social align="left" padding-top="10px">
          <mj-social-element name="facebook" background-color="white" src="https://shop.proyecto705.com/_next/image?url=%2FfacebookRosa.png&w=640&q=75"> </mj-social-element>
          <mj-social-element name="instagram" background-color="white" src="https://shop.proyecto705.com/_next/image?url=%2FinstagramRosa.png&w=640&q=75"> </mj-social-element>
        </mj-social>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

const defaultOrderConfirmedMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section border-left="2px solid #dbb393">
      <mj-column width="100%">
        <mj-image align="center" width="150px" src="https://shop.proyecto705.com/_next/image?url=%2FlogoNegro.png&w=640&q=75" />
      </mj-column>
    </mj-section>
    <mj-section border-left="2px solid #dbb393">
      <mj-column width="100%">
        <mj-text font-size="16px" letter-spacing="1px">
          Hola! {{user.first_name}}
        </mj-text>
        <mj-text letter-spacing="1px">
          Antes que nada, !! Muchisimas gracias por comprar con nosotros !!
        </mj-text>
        <mj-text letter-spacing="1px">
        Tu orden número {{ order.number }} ha sido creada.
        </mj-text>
        <mj-text letter-spacing="1px">
          Te enviaremos un correo con los detalles del envío cuando todo este listo.
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section border-left="2px solid #dbb393">
      <mj-column>
        <mj-text font-size="14px" font-weight="500" letter-spacing="1px">
          Dirección de envío
        </mj-text>
        <mj-text letter-spacing="1px" line-height="1.7">
          {{ order.billingAddress.streetAddress1 }}
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section border-left="2px solid #dbb393">
      <mj-column>
        <mj-table>
          <tbody>
            {{#each order.lines }}
              <tr>
                <td>
                  {{ this.quantity }} x {{ this.productName }} - {{ this.variantName }}
                </td>
                <td align="right">
                  {{ this.totalPrice.gross.amount }} {{ this.totalPrice.gross.currency }}
                </td>
              </tr>
            {{/each}}
            <tr>
              <td>
              </td>
              <td align="right">
                Envio: {{ order.shippingPrice.gross.amount }} {{ order.shippingPrice.gross.currency }}
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td align="right">
                Total: {{ order.total.gross.amount }} {{ order.total.gross.currency }}
              </td>
            </tr>
          </tbody>
        </mj-table>
      </mj-column>
    </mj-section>
    <mj-section border-left="2px solid #dbb393">
      <mj-column>
        <mj-divider border-width="1px" border-color="lightgrey"/>
        <mj-social align="left" padding-top="10px">
          <mj-social-element name="facebook" background-color="white" src="https://shop.proyecto705.com/_next/image?url=%2FfacebookRosa.png&w=640&q=75"> </mj-social-element>
          <mj-social-element name="instagram" background-color="white" src="https://shop.proyecto705.com/_next/image?url=%2FinstagramRosa.png&w=640&q=75"> </mj-social-element>
        </mj-social>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

const defaultOrderFullyPaidMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hello!
        </mj-text>
        <mj-text>
          Order {{ order.number }} has been fully paid.
        </mj-text>
      </mj-column>
    </mj-section>
    ${addressSection}
    ${orderLinesSection}  
  </mj-body>
</mjml>`;

const defaultOrderRefundedMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hello!
        </mj-text>
        <mj-text>
          Order {{ order.number }} has been refunded.
        </mj-text>
      </mj-column>
    </mj-section>
    ${addressSection}
    ${orderLinesSection}  
  </mj-body>
</mjml>`;

const defaultOrderCancelledMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
            Hello!
        </mj-text>
        <mj-text>
          Order {{ order.number }} has been cancelled.
        </mj-text>
      </mj-column>
    </mj-section>
    ${addressSection}
    ${orderLinesSection}
  </mj-body>
</mjml>`;

const defaultInvoiceSentMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hi!
        </mj-text>
        <mj-text>
          New invoice has been created
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

// TODO: Improve the template
const defaultGiftCardSentMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hi!
        </mj-text>
        <mj-text>
          Heres your gift card
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

const defaultAccountConfirmationMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section border-left="2px solid #dbb393">
      <mj-column width="100%" >
        <mj-image align="center" width="100px" src="https://shop.proyecto705.com/_next/image?url=%2FlogoNegro.png&w=640&q=75"/>
      </mj-column>
    </mj-section>
    <mj-section full-width="full-width" background-color="white" border-left="2px solid #dbb393">
      <mj-group>
        <mj-column width="100%" >
          <mj-text align="left" font-size="18px" letter-spacing="1px" color="#a57b59">Un paso más...</mj-text>
          <mj-spacer height="30px"/>
          <mj-text align="left" line-height="1.7" letter-spacing="1px">Hola {{user.first_name}} haz creado tu cuenta con exito, por favor da click en el botón de abajo para activar todo lo que Proyecto 705 tiene para ti.</mj-text>
          <mj-spacer height="20px"/>
          <mj-button border-radius="15px" align="center" background-color="#a57b59" letter-spacing="1px" color="white" href="{{confirm_url}}">
            Confirmar ahora
          </mj-button>
          <mj-spacer height="20px"/>
          <mj-divider border-width="1px" border-color="lightgrey"/>
          <mj-social align="left" padding-top="10px">
            <mj-social-element name="facebook" background-color="white" src="https://shop.proyecto705.com/_next/image?url=%2FfacebookRosa.png&w=640&q=75"> </mj-social-element>
            <mj-social-element name="instagram" background-color="white" src="https://shop.proyecto705.com/_next/image?url=%2FinstagramRosa.png&w=640&q=75"> </mj-social-element>
          </mj-social>
        </mj-column>
      </mj-group>
    </mj-section>
  </mj-body>
</mjml>`;

const defaultAccountPasswordResetMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hi {{user.first_name}}!
        </mj-text>
        <mj-text>
          Password reset has been requested. Please follow the link to proceed: 
        </mj-text>
        <mj-button href="{{reset_url}}"  background-color="black" color="white" padding-top="50px" inner-padding="20px" width="70%">
            Reset the password 
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

const defaultAccountChangeEmailRequestMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hi {{user.first_name}}!
        </mj-text>
        <mj-text>
          Email address change has been requested. If you want to confirm changing the email address to {{new_email}}, please follow the link: 
        </mj-text>
        <mj-button href="{{redirect_url}}"  background-color="black" color="white" padding-top="50px" inner-padding="20px" width="70%">
            Change the email
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

const defaultAccountChangeEmailConfirmationMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hi {{user.first_name}}!
        </mj-text>
        <mj-text>
          Email address change has been confirmed.
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

const defaultAccountDeleteMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
          Hi {{user.first_name}}!
        </mj-text>
        <mj-text>
          Account deletion has been requested. If you want to confirm, please follow the link: 
        </mj-text>
        <mj-button href="{{redirect_url}}"  background-color="black" color="white" padding-top="50px" inner-padding="20px" width="70%">
            Delete the account
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`;

const defaultOrderFulfillmentUpdatedMjmlTemplate = `<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="16px">
            Hello!
        </mj-text>
        <mj-text>
          Fulfillment for the order {{ order.number }} has been updated.
        </mj-text>
        {{#if fulfillment.tracking_number }}
          <mj-text>
            Tracking number: {{ fulfillment.tracking_number }}
          </mj-text>
        {{/if}}
      </mj-column>
    </mj-section>
    ${addressSectionForNotify}
  </mj-body>
</mjml>`;

export const defaultMjmlTemplates: Record<MessageEventTypes, string> = {
  ACCOUNT_CHANGE_EMAIL_CONFIRM: defaultAccountChangeEmailConfirmationMjmlTemplate,
  ACCOUNT_CHANGE_EMAIL_REQUEST: defaultAccountChangeEmailRequestMjmlTemplate,
  ACCOUNT_CONFIRMATION: defaultAccountConfirmationMjmlTemplate,
  ACCOUNT_DELETE: defaultAccountDeleteMjmlTemplate,
  ACCOUNT_PASSWORD_RESET: defaultAccountPasswordResetMjmlTemplate,
  GIFT_CARD_SENT: defaultGiftCardSentMjmlTemplate,
  INVOICE_SENT: defaultInvoiceSentMjmlTemplate,
  ORDER_CANCELLED: defaultOrderCancelledMjmlTemplate,
  ORDER_CONFIRMED: defaultOrderConfirmedMjmlTemplate,
  ORDER_CREATED: defaultOrderCreatedMjmlTemplate,
  ORDER_FULFILLED: defaultOrderFulfilledMjmlTemplate,
  ORDER_FULFILLMENT_UPDATE: defaultOrderFulfillmentUpdatedMjmlTemplate,
  ORDER_FULLY_PAID: defaultOrderFullyPaidMjmlTemplate,
  ORDER_REFUNDED: defaultOrderRefundedMjmlTemplate,
};

export const defaultMjmlSubjectTemplates: Record<MessageEventTypes, string> = {
  ACCOUNT_CHANGE_EMAIL_CONFIRM: "Email change confirmation",
  ACCOUNT_CHANGE_EMAIL_REQUEST: "Email change request",
  ACCOUNT_CONFIRMATION: "Activa tu cuenta",
  ACCOUNT_DELETE: "Account deletion",
  ACCOUNT_PASSWORD_RESET: "Password reset request",
  GIFT_CARD_SENT: "Gift card",
  INVOICE_SENT: "New invoice has been created",
  ORDER_CANCELLED: "Order {{ order.number }} has been cancelled",
  ORDER_CONFIRMED: "La orden {{ order.number }} fue creada exitosamente",
  ORDER_CREATED: "La orden {{ order.number }} fue creada",
  ORDER_FULFILLED: "Detalles del envio, orden {{ order.number }}",
  ORDER_FULFILLMENT_UPDATE: "Fulfillment for order {{ order.number }} has been updated",
  ORDER_FULLY_PAID: "Order {{ order.number }} has been fully paid",
  ORDER_REFUNDED: "Order {{ order.number }} has been refunded",
};
