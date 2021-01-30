var obj = JSON.parse($response.body);
 obj={
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 944665061,
    "receipt_creation_date" : "2021-01-30 16:04:34 Etc/GMT",
    "bundle_id" : "com.loveyouchenapps.knockout",
    "original_purchase_date" : "2019-05-10 20:00:01 Etc/GMT",
    "in_app" : [

    ],
    "adam_id" : 944665061,
    "receipt_creation_date_pst" : "2021-01-30 08:04:34 America/Los_Angeles",
    "request_date" : "2021-01-30 16:28:49 Etc/GMT",
    "request_date_pst" : "2021-01-30 08:28:49 America/Los_Angeles",
    "version_external_identifier" : 839978395,
    "request_date_ms" : "1612024129039",
    "original_purchase_date_pst" : "2019-05-10 13:00:01 America/Los_Angeles",
    "application_version" : "6.10",
    "original_purchase_date": "2019-05-10 20:00:01 Etc/GMT",
    "original_purchase_date_ms": "1557518401000",
    "original_purchase_date_pst": "2019-05-10 13:00:01 America/Los_Angeles",
    "original_application_version": "3.95",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.knockout.halfyearplus",
      "transaction_id": "730000582440350",
      "original_transaction_id": "730000582440350",
      "purchase_date": "2021-01-11 17:07:06 Etc/GMT",
      "purchase_date_ms": "1610384826000",
      "purchase_date_pst": "2021-01-11 09:07:06 America/Los_Angeles",
      "original_purchase_date": "2021-01-11 17:07:06 Etc/GMT",
      "original_purchase_date_ms": "1610384826000",
      "original_purchase_date_pst": "2021-01-11 09:07:06 America/Los_Angeles",
      "expires_date": "2099-09-09 17:07:06 Etc/GMT",
      "expires_date_ms": "4092647115000",
      "expires_date_pst": "2099-09-09 09:07:06 America/Los_Angeles",
      "web_order_line_item_id": "730000235883267",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.knockout.halfyearplus",
    "transaction_id": "730000582440350",
    "original_transaction_id": "730000582440350",
    "purchase_date": "2021-01-11 17:07:06 Etc/GMT",
    "purchase_date_ms": "1610384826000",
    "purchase_date_pst": "2021-01-11 09:07:06 America/Los_Angeles",
    "original_purchase_date": "2021-01-11 17:07:06 Etc/GMT",
    "original_purchase_date_ms": "1610384826000",
    "original_purchase_date_pst": "2021-01-11 09:07:06 America/Los_Angeles",
    "expires_date": "2099-09-09 17:07:06 Etc/GMT",
    "expires_date_ms": "4092647115000",
    "expires_date_pst": "2099-09-09 09:07:06 America/Los_Angeles",
    "web_order_line_item_id": "730000235883267",
    "is_trial_period": "false",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20386379"
}
$done({body: JSON.stringify(obj)});