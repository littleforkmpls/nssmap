/**
 * @typedef TypeformWebhookPayload
 * @property {string} event_id
 * @property {string} event_type
 * @property {TypeformWebHookFormResponse} form_response
 */

/**
 * @typedef TypeformWebHookFormResponse
 * @property {string} form_id
 * @property {string} token
 * @property {string} submitted_at
 * @property {string} landed_at
 * @property {{score: number}} calculated
 * @property {TypeformVariable[]} variables
 * @property {TypeformDefinition} definition
 * @property {TypeformAnswer[]} answers
 */

/**
 * @typedef TypeformVariable
 * @property {string} key
 * @property {"number"|"text"} type
 * @property {number} number
 * @property {string} text
 */

module.exports.Example_TypeformWebhookPayload = {
  "event_id": "LtWXD3crgy",
  "event_type": "form_response",
  "form_response": {
    "form_id": "test",
    "token": "a3a12ec67a1365927098a606107fac15",
    "submitted_at": "2018-01-18T18:17:02Z",
    "landed_at": "2018-01-18T18:07:02Z",
    "calculated": {
      "score": 0
    },
    "variables": [],
    "hidden":{},
    "definition": {},
    "answers": [
      {
        "field": {
          "id": "0pWPOTkeJ4ou",
          "ref": "6ef88fc2-8e51-4f13-a9ac-750afa26b3f0",
          "type": "yes_no"
        },
        "type": "boolean",
        "boolean": true
      },
      {
        "field": {
          "id": "9k5fYUBAnLyl",
          "ref": "d07a0417-c7f7-497d-8897-5fc5f5734c3d",
          "type": "short_text"
        },
        "type": "text",
        "text": "Gage Hall"
      },
      {
        "field": {
          "id": "ONGanBAnwVcb",
          "ref": "6639271f-8636-48f7-9a52-8df8120dad37",
          "type": "long_text"
        },
        "type": "text",
        "text": "Mankato State Dormitory when I attended college"
      },
      {
        "field": {
          "id": "kiRUTvgxRGEU",
          "ref": "38e8595e-f788-447c-bc31-49e5beb47f9a",
          "type": "multiple_choice"
        },
        "type": "choices",
        "choices": {
          "ids": [
            "C370Hpszcfzl",
            "other"
          ],
          "refs": [
            "58e53dab-9190-46cc-87a2-819676304b43"
          ],
          "labels": [
            "School / College / University"
          ],
          "other": "Dorm"
        }
      },
      {
        "field": {
          "id": "LwSMnEdjg3lo",
          "ref": "46e4cd9c-8c4d-4b8b-a97f-8cffeac885b4",
          "type": "short_text"
        },
        "type": "text",
        "text": "Mankato"
      },
      {
        "field": {
          "id": "25LtGwnYl9m9",
          "ref": "e1fe2e1d-d8fc-4789-9760-e3d65742a888",
          "type": "short_text"
        },
        "type": "text",
        "text": "?"
      },
      {
        "field": {
          "id": "NHUKT3EzpMEQ",
          "ref": "dfafbf82-0beb-45ca-b91b-25408c3fd528",
          "type": "number"
        },
        "type": "number",
        "number": 56001
      },
      {
        "field": {
          "id": "Xpby4jkXPJGo",
          "ref": "ad167567-409c-4f1d-b75b-d9adb941a1c9",
          "type": "yes_no"
        },
        "type": "boolean",
        "boolean": false
      },
      {
        "field": {
          "id": "veG6QCVqbLQm",
          "ref": "acc250c4-8a0c-4b4c-91aa-b26291699053",
          "type": "yes_no"
        },
        "type": "boolean",
        "boolean": false
      },
      {
        "field": {
          "id": "PCT92ywkggUp",
          "ref": "ccf1dffb-fdaf-47e2-9659-aaebca258a24",
          "type": "yes_no"
        },
        "type": "boolean",
        "boolean": true
      },
      {
        "field": {
          "id": "J429I5JhdsSq",
          "ref": "b2199c8e-d99b-4475-a220-1baae1ecd014",
          "type": "file_upload"
        },
        "type": "file_url",
        "file_url": "https://api.typeform.com/forms/Wudz4qvi/responses/7l1zu7f9s6otmjchqcqkyeg7l1zu7f97/fields/J429I5JhdsSq/files/1c2a9eddfb99-gage_hall_1.webp"
      },
      {
        "field": {
          "id": "L3iAUQOe99tJ",
          "ref": "3980b178-aa40-4258-b2fe-94a2f4d034be",
          "type": "file_upload"
        },
        "type": "file_url",
        "file_url": "https://api.typeform.com/forms/Wudz4qvi/responses/7l1zu7f9s6otmjchqcqkyeg7l1zu7f97/fields/L3iAUQOe99tJ/files/0749513fe983-540557ef7d060.preview_620.jpg"
      },
      {
        "field": {
          "id": "jx7RU0owx19W",
          "ref": "ea885ad4-7f01-4cb5-a28c-c02c4f5c81d7",
          "type": "file_upload"
        },
        "type": "file_url",
        "file_url": "https://api.typeform.com/forms/Wudz4qvi/responses/7l1zu7f9s6otmjchqcqkyeg7l1zu7f97/fields/jx7RU0owx19W/files/8c43ae1c9650-early_morning_Gage_view_from_FB_field.jpg"
      },
      {
        "field": {
          "id": "fdbfK7ViCL5Q",
          "ref": "b1496311-3c5c-4d79-aff4-64f5aaea4fe4",
          "type": "file_upload"
        },
        "type": "file_url",
        "file_url": "https://api.typeform.com/forms/Wudz4qvi/responses/7l1zu7f9s6otmjchqcqkyeg7l1zu7f97/fields/fdbfK7ViCL5Q/files/73cc39122715-20130404__gage.webp"
      },
      {
        "field": {
          "id": "3yp6J4Xx3ABe",
          "ref": "cea13f52-c247-4419-8132-3c7081355342",
          "type": "file_upload"
        },
        "type": "file_url",
        "file_url": "https://api.typeform.com/forms/Wudz4qvi/responses/7l1zu7f9s6otmjchqcqkyeg7l1zu7f97/fields/3yp6J4Xx3ABe/files/658b266c910c-MSU.jpg"
      },
      {
        "field": {
          "id": "OFcWqPxkaqqr",
          "ref": "7c920e84-42c9-4e46-853e-6e5a17c473ff",
          "type": "website"
        },
        "type": "url",
        "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        "field": {
          "id": "fDvLg5uTIcol",
          "ref": "b365bb6e-9b89-4019-a609-165b8849c9b5",
          "type": "website"
        },
        "type": "url",
        "url": "https://www.youtube.com/watch?v=fbZljzV4Yfc"
      },
      {
        "field": {
          "id": "cCtnKNF62tdD",
          "ref": "01FP8R28D7BXV30MRKD76VD6G8",
          "type": "short_text"
        },
        "type": "text",
        "text": "Tony"
      },
      {
        "field": {
          "id": "TkcWAwJKtA0t",
          "ref": "4a1e3e43-f63c-4928-b9b3-4ed5407bf754",
          "type": "short_text"
        },
        "type": "text",
        "text": "Ticknor"
      },
      {
        "field": {
          "id": "R5tkVz3rTzyV",
          "ref": "e153d8d1-c3a5-4ea4-8dc2-96a64978c0e3",
          "type": "email"
        },
        "type": "email",
        "email": "tony@little-fork.com"
      },
      {
        "field": {
          "id": "YyAwGwFFhcv9",
          "ref": "57a24f4f-8598-4f92-96b1-8ff3c93af350",
          "type": "short_text"
        },
        "type": "text",
        "text": "Bloomington MN"
      },
      {
        "field": {
          "id": "JsiJT53nZ7hA",
          "ref": "d67e61b7-2098-4493-b195-8ab3c4461f78",
          "type": "multiple_choice"
        },
        "type": "choice",
        "choice": {
          "id": "bMkShcIhUxRG",
          "ref": "e94eba6a-026f-4a70-8125-a7e29cee3fab",
          "label": "34-41"
        }
      },
      {
        "field": {
          "id": "QXNwuNPOl9Au",
          "ref": "6abdaa3e-addf-4a4d-b0ad-d7e2cc0b7832",
          "type": "short_text"
        },
        "type": "text",
        "text": "Caucasian"
      },
      {
        "field": {
          "id": "siMgqnMbaPOD",
          "ref": "d56234ba-c019-4406-b9e2-a62000c03712",
          "type": "short_text"
        },
        "type": "text",
        "text": "Male"
      },
      {
        "field": {
          "id": "vzq9hhEpRtB5",
          "ref": "2eb4f850-e78f-4b1b-9196-ca1140df7f3f",
          "type": "long_text"
        },
        "type": "text",
        "text": "Nothing else to share"
      }
    ]
  }
}