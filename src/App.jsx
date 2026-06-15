import { useMemo, useState } from "react";

const appSchema = {
  "type": "multi-screen-app",
  "title": "Amzn",
  "entry": "home",
  "flow": {
    "home": "detail",
    "detail": "cart",
    "upload": "home",
    "cart": "home"
  },
  "screens": {
    "home": {
      "type": "ecommerce",
      "title": "Home / Products",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "200px",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "34px",
              "type": "banner",
              "title": "RapidMart Marketplace",
              "subtitle": "Curated deals across everyday marketplace categories.",
              "id": "d14c550c-28b2-4dca-9498-495b6d8cfc81"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Grid",
              "columns": 5,
              "gap": 16,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Electronics",
                  "value": "Audio and devices",
                  "targetScreen": "",
                  "id": "5f517c61-b06e-4ec5-8513-3c5b54f7f090"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Fashion",
                  "value": "Shoes and apparel",
                  "targetScreen": "",
                  "id": "9e8ded9c-6b0c-4bd5-b09d-8cd9c6a4076c"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Home",
                  "value": "Kitchen and decor",
                  "targetScreen": "",
                  "id": "958d556c-61e6-4697-8230-390ce3a717dd"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Sports",
                  "value": "Fitness gear",
                  "targetScreen": "",
                  "id": "71083480-292e-4814-9d3c-f5664eb7d316"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "maxWidth": "",
                  "height": "112px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "16px",
                  "shadow": true,
                  "padding": "18px",
                  "type": "card",
                  "title": "Books",
                  "value": "Fiction and learning",
                  "targetScreen": "",
                  "id": "b42b1b0f-40cd-4f0f-ae57-062f4aaa9792"
                }
              ],
              "id": "84eb699e-0b30-475c-90eb-056df762dccb",
              "width": "100%"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Featured Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Noise Canceling Headphones",
                  "price": "$129 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "5f1aa89d-77df-4fa4-93d4-fbe2a763d944"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "1bb77a92-9d52-46b0-ac07-556d42468772"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "5e3d60f3-6e43-4154-83f4-3db5a3642c93"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Kitchen Air Fryer",
                  "price": "$119 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "758b1805-833b-4d3d-9ec3-8765b85ceb90"
                }
              ],
              "id": "9abe60f7-6db8-40eb-888e-9baa7228269d"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Popular Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "9b4ff728-73b2-4f02-9a90-09283992be91"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "ef7ece3d-15d0-480c-9cc5-742b04382377"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Wireless Charger",
                  "price": "$29 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "5309af43-e15c-474f-b7ab-7302d630d315"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Coffee Maker",
                  "price": "$96 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "b618410c-28a0-43e3-bda9-5fea9dbc5cb9"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Running Shoes",
                  "price": "$68 | 4.5 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "1056f4f0-1645-4d48-a26f-8c51c54b2f53"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Bestseller Novel",
                  "price": "$18 | 4.8 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "6f26a420-5f11-4401-90c8-c6b635eafd9c"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Yoga Mat Pro",
                  "price": "$34 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "4deb3152-fc4e-438c-83d2-cb2f17c602a8"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Cotton Hoodie",
                  "price": "$52 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "d1bd9011-257b-49b4-a776-4a191d0b293e"
                }
              ],
              "id": "2f6220dd-5ff1-40f3-9ff3-0082e6d2162c"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "maxWidth": "",
              "height": "auto",
              "backgroundColor": "#1E293B",
              "textColor": "#FFFFFF",
              "borderRadius": "16px",
              "shadow": true,
              "padding": "26px",
              "type": "banner",
              "title": "Deal of the Day",
              "subtitle": "Save on top-rated tech bundles before midnight.",
              "id": "722023d1-a13d-48fe-a499-854046270a10"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 14,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Sell on RapidMart",
                  "action": "go-to-screen",
                  "targetScreen": "upload",
                  "id": "ecd7b1fe-5cf0-4b78-b4f9-33cecff97139"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "View Cart",
                  "action": "go-to-screen",
                  "targetScreen": "cart",
                  "id": "976b0d79-3c41-4d73-a7a6-c5325dfb372c"
                }
              ],
              "id": "2294d0fb-6d2e-4eca-8b2c-b6550e0df11e"
            }
          ],
          "id": "8493a256-de0c-490c-86ee-4b6dc347a664"
        }
      ]
    },
    "detail": {
      "type": "ecommerce",
      "title": "Product Detail",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "stretch",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "44%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "340px",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "30px",
                      "type": "card",
                      "title": "Product Gallery",
                      "value": "Large product image placeholder",
                      "targetScreen": "",
                      "id": "1e400ec0-d884-4cc9-b137-f9b5971f5ee1"
                    }
                  ],
                  "id": "818a390f-9db3-467d-964c-42ff31bc8e67"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "52%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "Premium wireless audio with adaptive sound and long battery life.",
                      "targetScreen": "",
                      "id": "8a3ea0b7-6f62-49ab-94f3-170203db4bff"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Price",
                      "value": "$129",
                      "targetScreen": "",
                      "id": "b9230556-8d83-458b-99bb-73fdb978b115"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Rating",
                      "value": "4.8 stars | 2,481 reviews",
                      "targetScreen": "",
                      "id": "e38f4a94-4db5-4234-bf76-af65695d2385"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "26px",
                      "type": "card",
                      "title": "Description",
                      "value": "Active noise cancellation, soft ear cushions, quick charge, and travel case.",
                      "targetScreen": "",
                      "id": "82bace08-9d71-44ac-aab7-bdfff7c5c7f7"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Buy Now",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "a5ae58ff-35e2-4449-8c75-5a3c3f48f3e9"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Add To Cart",
                          "action": "go-to-screen",
                          "targetScreen": "cart",
                          "id": "f1d108a2-76d7-497f-a42e-3f63efa8feaf"
                        }
                      ],
                      "id": "533bf370-f797-446a-a4c0-da6afd1eaf00"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "widthMode": "auto",
                      "maxWidth": "",
                      "height": "46px",
                      "backgroundColor": "#334155",
                      "textColor": "#FFFFFF",
                      "borderRadius": "12px",
                      "padding": "12px 24px",
                      "fontSize": "15px",
                      "fontWeight": "600",
                      "alignment": "left",
                      "type": "button",
                      "label": "Back To Products",
                      "action": "go-to-screen",
                      "targetScreen": "home",
                      "id": "00e45ea3-a379-4467-b7b7-fa6829d17581"
                    }
                  ],
                  "id": "86fd2ad5-1d17-4438-bed5-ea384c69186d",
                  "gap": 18
                }
              ],
              "id": "d9e84f25-1c20-422a-92e1-f8595078fc23"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "grid",
              "title": "Related Products",
              "columns": 4,
              "gap": 24,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Smart Home Speaker",
                  "price": "$89 | 4.6 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "ba307a06-3966-4bf5-9998-7f0c79505d3b"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Travel Backpack",
                  "price": "$74 | 4.7 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "fa7f23fa-b84b-4862-bd87-d56ff2dd2f84"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Fitness Watch",
                  "price": "$149 | 4.4 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "be01cb9d-46c0-44b4-95ae-c4f154c7a238"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "product-card",
                  "name": "Desk Lamp Pro",
                  "price": "$42 | 4.9 stars",
                  "image": "",
                  "targetScreen": "detail",
                  "id": "14b4ff38-566e-4744-a4fc-70c6bf49a3a9"
                }
              ],
              "id": "3be992ee-52da-4f64-8988-f7902bbe6165"
            }
          ],
          "id": "70fc37d5-ef31-489d-89f1-514f3a59333a"
        }
      ]
    },
    "upload": {
      "type": "ecommerce",
      "title": "Upload Product",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Seller Center",
          "subtitle": "Create a polished product listing.",
          "id": "d7fcbe38-a8db-4d46-b975-121283e339b7"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Product Listing Form",
          "padding": "30px",
          "margin": "0",
          "maxWidth": "740px",
          "backgroundColor": "#1E293B",
          "borderRadius": "16px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "productName",
              "placeholder": "Product name",
              "inputType": "text",
              "id": "000ea26a-c281-4e20-9307-6c13e5deda4b"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "category",
              "placeholder": "Category",
              "inputType": "text",
              "id": "6bc4f7ac-252f-4feb-801e-ef9564ef0819"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "price",
              "placeholder": "Price",
              "inputType": "text",
              "id": "c46a74f0-4663-430f-9c17-0fad26bfdb75"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "description",
              "placeholder": "Short description",
              "inputType": "text",
              "id": "a441d008-28d8-460b-960e-9a9771650635"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "input",
              "field": "imageUrl",
              "placeholder": "Image upload URL",
              "inputType": "text",
              "id": "f9b01f68-6384-44e7-89de-479569d36d50"
            },
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 12,
              "justify": "center",
              "align": "center",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#7C3AED",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Save Product",
                  "action": "none",
                  "targetScreen": "",
                  "id": "7cfd7c4c-4ef2-411f-8ead-6709b012b757"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#1E293B",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Preview Product",
                  "action": "go-to-screen",
                  "targetScreen": "detail",
                  "id": "d565cd0f-b56d-4bee-b89f-a1bd0f5c1415"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "widthMode": "auto",
                  "maxWidth": "",
                  "height": "46px",
                  "backgroundColor": "#334155",
                  "textColor": "#FFFFFF",
                  "borderRadius": "12px",
                  "padding": "12px 24px",
                  "fontSize": "15px",
                  "fontWeight": "600",
                  "alignment": "left",
                  "type": "button",
                  "label": "Back to Products",
                  "action": "go-to-screen",
                  "targetScreen": "home",
                  "id": "7de44154-fe2f-4c80-95c0-fe8071688d04"
                }
              ],
              "id": "c1cbebb2-dd37-40ad-91a5-8db2807562ef"
            }
          ],
          "id": "0d8fc23d-5d62-42a7-8455-3ac6d96638ce"
        }
      ]
    },
    "cart": {
      "type": "ecommerce",
      "title": "Cart / Checkout",
      "blocks": [
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "maxWidth": "",
          "height": "170px",
          "backgroundColor": "#1E293B",
          "textColor": "#FFFFFF",
          "borderRadius": "16px",
          "shadow": true,
          "padding": "30px",
          "type": "banner",
          "title": "Cart / Checkout",
          "subtitle": "Review items, totals, and checkout actions.",
          "id": "ac0a2c92-3722-4e2c-8ce6-3d461bafe512"
        },
        {
          "version": 1,
          "variant": "default",
          "importance": "secondary",
          "hiddenOnMobile": false,
          "hiddenOnTablet": false,
          "type": "container",
          "title": "Container",
          "padding": "28px",
          "margin": "0",
          "maxWidth": "none",
          "backgroundColor": "transparent",
          "borderRadius": "0px",
          "children": [
            {
              "version": 1,
              "variant": "default",
              "importance": "secondary",
              "hiddenOnMobile": false,
              "hiddenOnTablet": false,
              "type": "row",
              "gap": 36,
              "justify": "start",
              "align": "start",
              "wrap": true,
              "children": [
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "62%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Noise Canceling Headphones",
                      "value": "$129 | Qty 1",
                      "targetScreen": "",
                      "id": "34bdae82-187f-4c3c-92c3-863b6c238fd5"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Travel Backpack",
                      "value": "$74 | Qty 1",
                      "targetScreen": "",
                      "id": "bccd8834-3876-4934-bfed-c64b45d8249e"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "22px",
                      "type": "card",
                      "title": "Shipping Address",
                      "value": "Add delivery address during checkout.",
                      "targetScreen": "",
                      "id": "ef5ab68e-2ac7-48b2-b0dd-57c22afccf96"
                    }
                  ],
                  "id": "51e7ef87-05f3-436c-bd31-5a4de0212741"
                },
                {
                  "version": 1,
                  "variant": "default",
                  "importance": "secondary",
                  "hiddenOnMobile": false,
                  "hiddenOnTablet": false,
                  "type": "column",
                  "width": "34%",
                  "grow": true,
                  "children": [
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Subtotal",
                      "value": "$203",
                      "targetScreen": "",
                      "id": "0f03da9c-4666-436b-b2e3-1ab718be0315"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Shipping",
                      "value": "$8",
                      "targetScreen": "",
                      "id": "ab5fb8e4-0368-48f4-9d8f-4fa493606656"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#1E293B",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "20px",
                      "type": "card",
                      "title": "Tax",
                      "value": "$17",
                      "targetScreen": "",
                      "id": "53bd8f10-c697-4848-9ec0-9ce9adcef101"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "maxWidth": "",
                      "height": "auto",
                      "backgroundColor": "#312E81",
                      "textColor": "#FFFFFF",
                      "borderRadius": "16px",
                      "shadow": true,
                      "padding": "24px",
                      "type": "card",
                      "title": "Total",
                      "value": "$228",
                      "targetScreen": "",
                      "id": "f51b15b7-c146-4c90-9209-918344d6f486"
                    },
                    {
                      "version": 1,
                      "variant": "default",
                      "importance": "secondary",
                      "hiddenOnMobile": false,
                      "hiddenOnTablet": false,
                      "type": "row",
                      "gap": 12,
                      "justify": "start",
                      "align": "center",
                      "wrap": true,
                      "children": [
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#7C3AED",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Checkout",
                          "action": "none",
                          "targetScreen": "",
                          "id": "32b2a529-ea23-4c82-9e6a-d390c035bee0"
                        },
                        {
                          "version": 1,
                          "variant": "default",
                          "importance": "secondary",
                          "hiddenOnMobile": false,
                          "hiddenOnTablet": false,
                          "widthMode": "auto",
                          "maxWidth": "",
                          "height": "46px",
                          "backgroundColor": "#1E293B",
                          "textColor": "#FFFFFF",
                          "borderRadius": "12px",
                          "padding": "12px 24px",
                          "fontSize": "15px",
                          "fontWeight": "600",
                          "alignment": "left",
                          "type": "button",
                          "label": "Continue Shopping",
                          "action": "go-to-screen",
                          "targetScreen": "home",
                          "id": "93781a48-968f-464b-b5ed-5de4cf28af13"
                        }
                      ],
                      "id": "d1835b59-5909-43c7-84c4-8f8991a0a904"
                    }
                  ],
                  "id": "18b7471e-5f12-444e-a22b-499f3e5915b7",
                  "gap": 18
                }
              ],
              "id": "5f21b68d-1d48-44b7-910a-d48e76dd8d34"
            }
          ],
          "id": "6c5d8fa9-fd14-4b2a-b0d2-a247e38f9795"
        }
      ]
    }
  },
  "navigation": [],
  "theme": {
    "primaryColor": "#7c3aed",
    "secondaryColor": "#06b6d4",
    "backgroundColor": "#0f172a",
    "surfaceColor": "#1e293b",
    "textColor": "#ffffff",
    "borderRadius": "12px",
    "fontFamily": "Inter",
    "spacing": "normal"
  },
  "components": []
};

const supportedBlockTypes = new Set([
  "hero",
  "banner",
  "card",
  "product-card",
  "button",
  "input",
  "table",
  "chart",
  "container",
  "row",
  "column",
  "grid",
  "spacer",
  "divider",
  "features",
  "cta"
]);

function getScreenKeys(schema) {
  return Object.keys(schema.screens || {});
}

function getInitialScreen(schema) {
  const screenKeys = getScreenKeys(schema);
  if (schema.entry && schema.screens?.[schema.entry]) return schema.entry;
  return screenKeys[0] || "home";
}

function getText(value, fallback = "") {
  return value === undefined || value === null || value === "" ? fallback : value;
}

function toCssSize(value, fallback = undefined) {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "number" ? value + "px" : value;
}

function getSurfaceStyle(block = {}) {
  return {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    margin: toCssSize(block.margin),
    height: toCssSize(block.height),
    maxWidth: block.maxWidth || undefined,
  };
}

function getLayoutStyle(block = {}) {
  return {
    ...getSurfaceStyle(block),
    "--gap": toCssSize(block.gap, "16px"),
  };
}

function getJustify(value) {
  if (value === "center") return "center";
  if (value === "end") return "flex-end";
  if (value === "between") return "space-between";
  return "flex-start";
}

function getAlign(value) {
  if (value === "start") return "flex-start";
  if (value === "end") return "flex-end";
  if (value === "stretch") return "stretch";
  return "center";
}

function getBlockTarget(block, currentScreen) {
  if (block.targetScreen && appSchema.screens?.[block.targetScreen]) {
    return block.targetScreen;
  }

  if (block.action === "next-screen") {
    const nextScreen = appSchema.flow?.[currentScreen];
    return nextScreen && appSchema.screens?.[nextScreen] ? nextScreen : null;
  }

  if (block.actions?.onClick?.type === "navigate") {
    const target = block.actions.onClick.target;
    return target && appSchema.screens?.[target] ? target : null;
  }

  return null;
}

function navigateTo(target, setCurrentScreen) {
  if (!target || !appSchema.screens?.[target]) return;
  setCurrentScreen(target);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function RenderChildren({ blocks = [], currentScreen, setCurrentScreen }) {
  if (!blocks.length) return null;

  return blocks.map((block, index) => (
    <RenderBlock
      key={block.id || block.type + "-" + index}
      block={block}
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
    />
  ));
}

function HeroBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className={"hero hero-" + getText(block.variant, "default")} style={getSurfaceStyle(block)}>
      <div>
        <h1>{getText(block.title, "Hero Title")}</h1>
        <p>{getText(block.subtitle, "Hero subtitle")}</p>
        <div className="hero-actions">
          <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
            {getText(block.buttonLabel, "Get Started")}
          </button>
        </div>
      </div>
    </section>
  );
}

function BannerBlock({ block }) {
  return (
    <section className="banner" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Banner")}</h2>
      <p>{getText(block.subtitle, "Limited time offer")}</p>
    </section>
  );
}

function CardBlock({ block }) {
  return (
    <article className="card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Card title")}</h3>
      <p>{getText(block.value, "")}</p>
    </article>
  );
}

function ProductCardBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const metaParts = String(getText(block.price, "$99")).split("|").map((part) => part.trim()).filter(Boolean);
  const primaryMeta = metaParts[0] || "$99";
  const secondaryMeta = metaParts.slice(1).join(" | ");

  return (
    <article className="product-card" style={getSurfaceStyle(block)}>
      <div className="product-media">
        {block.image ? (
          <img src={block.image} alt={getText(block.name, "Product")} />
        ) : (
          <span>{String(primaryMeta).startsWith("$") ? "Product" : "Video"}</span>
        )}
      </div>
      <h3>{getText(block.name, "Product")}</h3>
      <div className="product-meta">
        <span>{primaryMeta}</span>
        {secondaryMeta ? <small>{secondaryMeta}</small> : null}
      </div>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {String(primaryMeta).startsWith("$") ? "View Product" : "Watch"}
      </button>
    </article>
  );
}

function ButtonBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);
  const style = {
    backgroundColor: block.backgroundColor || undefined,
    color: block.textColor || undefined,
    borderRadius: block.borderRadius || undefined,
    padding: toCssSize(block.padding),
    height: toCssSize(block.height),
    fontSize: toCssSize(block.fontSize),
    fontWeight: block.fontWeight || undefined,
    width: block.widthMode === "full" ? "100%" : "auto",
    maxWidth: block.maxWidth || undefined,
  };

  return (
    <button className="button" type="button" style={style} onClick={() => navigateTo(target, setCurrentScreen)}>
      {getText(block.label, "Button")}
    </button>
  );
}

function InputBlock({ block }) {
  return (
    <input
      className="input"
      type={getText(block.inputType, "text")}
      placeholder={getText(block.placeholder, block.field || "Input")}
      aria-label={getText(block.placeholder, block.field || "Input")}
    />
  );
}

function TableBlock({ block }) {
  const rows = block.rows || [
    ["Customer", "Status", "Amount"],
    ["Alex Morgan", "Paid", "$129"],
    ["Sam Taylor", "Pending", "$89"],
  ];

  return (
    <section className="table-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Table")}</h3>
      <div className="table-scroll">
        <table>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) =>
                  rowIndex === 0 ? (
                    <th key={cellIndex}>{cell}</th>
                  ) : (
                    <td key={cellIndex}>{cell}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ChartBlock({ block }) {
  return (
    <section className="chart-card" style={getSurfaceStyle(block)}>
      <h3>{getText(block.title, "Chart")}</h3>
      <div className="chart-bars">
        {[45, 70, 56, 88, 64].map((height, index) => (
          <span key={index} style={{ height: height + "%" }} />
        ))}
      </div>
    </section>
  );
}

function ContainerBlock({ block, currentScreen, setCurrentScreen }) {
  return (
    <section className="layout-container" style={getLayoutStyle(block)}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function RowBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    justifyContent: getJustify(block.justify),
    alignItems: getAlign(block.align),
    flexWrap: block.wrap === false ? "nowrap" : "wrap",
  };

  return (
    <section className="layout-row" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function ColumnBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    flexBasis: block.width || "0",
    flexGrow: block.grow === false ? 0 : 1,
  };

  return (
    <section className="layout-column" style={style}>
      <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </section>
  );
}

function GridBlock({ block, currentScreen, setCurrentScreen }) {
  const style = {
    ...getLayoutStyle(block),
    "--columns": Math.max(1, Number(block.columns || 3)),
  };

  return (
    <section className="grid-section" style={style}>
      {block.title ? <h2>{block.title}</h2> : null}
      <div className="layout-grid">
        <RenderChildren blocks={block.children} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </div>
    </section>
  );
}

function SpacerBlock({ block }) {
  return <div style={{ height: toCssSize(block.height, "32px") }} />;
}

function DividerBlock({ block }) {
  return <hr style={{ borderColor: block.color || "#334155", borderWidth: toCssSize(block.thickness, "1px") }} />;
}

function FeaturesBlock({ block }) {
  const items = block.items?.length ? block.items : ["Fast", "Simple", "Responsive"];

  return (
    <section className="features" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Features")}</h2>
      <div className="feature-grid">
        {items.map((item, index) => (
          <article className="card" key={index}>
            <h3>{item}</h3>
            <p>{block.descriptions?.[index] || "A polished generated section."}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CtaBlock({ block, currentScreen, setCurrentScreen }) {
  const target = getBlockTarget(block, currentScreen);

  return (
    <section className="cta" style={getSurfaceStyle(block)}>
      <h2>{getText(block.title, "Ready to start?")}</h2>
      <button type="button" onClick={() => navigateTo(target, setCurrentScreen)}>
        {getText(block.buttonLabel, "Get Started")}
      </button>
    </section>
  );
}

function UnsupportedBlock({ block }) {
  return (
    <section className="card">
      <h3>Unsupported block</h3>
      <p>{block.type}</p>
    </section>
  );
}

function RenderBlock({ block, currentScreen, setCurrentScreen }) {
  if (!block || !supportedBlockTypes.has(block.type)) {
    return <UnsupportedBlock block={block || { type: "unknown" }} />;
  }

  switch (block.type) {
    case "hero":
      return <HeroBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "banner":
      return <BannerBlock block={block} />;
    case "card":
      return <CardBlock block={block} />;
    case "product-card":
      return <ProductCardBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "button":
      return <ButtonBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "input":
      return <InputBlock block={block} />;
    case "table":
      return <TableBlock block={block} />;
    case "chart":
      return <ChartBlock block={block} />;
    case "container":
      return <ContainerBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "row":
      return <RowBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "column":
      return <ColumnBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "grid":
      return <GridBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    case "spacer":
      return <SpacerBlock block={block} />;
    case "divider":
      return <DividerBlock block={block} />;
    case "features":
      return <FeaturesBlock block={block} />;
    case "cta":
      return <CtaBlock block={block} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />;
    default:
      return <UnsupportedBlock block={block} />;
  }
}

export default function App() {
  const screenKeys = useMemo(() => getScreenKeys(appSchema), []);
  const [currentScreen, setCurrentScreen] = useState(() => getInitialScreen(appSchema));
  const screen = appSchema.screens?.[currentScreen] || appSchema.screens?.[screenKeys[0]] || {
    title: "Untitled Screen",
    blocks: [],
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Exported RAPID App</p>
          <h1>{getText(appSchema.title, "RAPID App")}</h1>
        </div>
        <nav aria-label="Screens">
          {screenKeys.map((screenKey) => (
            <button
              key={screenKey}
              type="button"
              className={screenKey === currentScreen ? "active" : ""}
              onClick={() => navigateTo(screenKey, setCurrentScreen)}
            >
              {getText(appSchema.screens[screenKey]?.title, screenKey)}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="screen-title">
          <p>Screen</p>
          <h2>{getText(screen.title, currentScreen)}</h2>
        </div>
        <RenderChildren blocks={screen.blocks} currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </main>
    </div>
  );
}
