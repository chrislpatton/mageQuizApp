var questions = [{
    question: "With which three kinds of product relations do Magento Catalog Target Rules deal?(Choose three) answers c,e,f",
    choices: ["The relations between a configurable product and its child products.", "The relations between a bundle and its child products", "The relations among products linked as cross-sell products", "The relations between a product and its custom options","The relations among products linked as related products","The relations among products linked as upsell products"],
    correctAnswer: ["2","4","5"]
}, {
    question: "When setData('some','value') is called on an EAV entity and the entity is saved to the database, answer b",
    choices: ["The 'value' of the attribute named 'some' is saved in the eav_values table", "The 'value' of the attribute named 'some' is saved in one of the entity's tables depending on its datatype (for example, entityname_varchar)", "The data will be stored in the EAV registry making 'some' 'value' available to the entity", "The 'value' of the attribute named T some' is saved in the eav attribute values table"],
    correctAnswer: 1
}, {
    question: "A custom frontend controller will extend which of the following classes? answer a",
    choices: ["Mage_Core_Controller_Front_Action", "Mage_Adminhtml_Controller_Action", "Mage_Core_Controller_Varien_Front", "Mage_Core_Controller_Abstract"],
    correctAnswer: 0
}, {
    question: "Which one of the following xpaths is correct for replacing Mage_Customer_Model_Custom_Address via Mage::helper ('customer/address')? answer c",
    choices: ["Global/customer/helpers/address", "Global/rewrite/helpers/rewrite/address", "Global/helpers/customers/rewrite/address", "Global/helpers/rewrite/customer_address","Global/helpers/rewrite/customer/address"],
    correctAnswer: 2
}, {
    question: "Which three of the following object types will have a parent class found in the Mage_Eav module for the purposes of EAV data storage in Magento? (Choose three) answer c,d,e",
    choices: ["Data model", "Data helper", "Resource model", "Resource collection","Setup class"],
    correctAnswer: ["2","3","4"]
}, {
    question: "Which three of the following conditions are used to protect an admin route via ACL? (Choose three) answers a,c,d",
    choices: ["You have defined an ACL in your module configuration", "At least on admin role must have permisson for that route", "You have extended the controller from Mage_Adminhtml_Controller_Action", "You have define a method _isAllowed which check permission","The route name must start with admin"],
    correctAnswer: ["0","2","3"]
}, {
    question: "Applying the shopping cart rule's action affects the quote item by setting the quote item's ____________.  answer b",
    choices: ["base_price and price properties with the discounted price", "base_discount_amount and discount_amount with the discount applied to the original price", "base_row_total and cow_total properties with the discounted price", "base_price_incl_tax and price_incl_tax properties with the discounted price"],
    correctAnswer: ["1"]
}, {
    question: "What is the purpose of Catalog Target rules? answer b",
    choices:["To extend Catalog Price Rules to be used for related products", "To provide a mechanism for rendering a list of additional products on the product page", "To provide a mechaism for rendering a list of custom product options", "To provide a mechaism for easier selection options for configurable products"],
    correctAnswer:["1"]
}, {
    question:"When changes are made to more than one of a collection's items using setData('some','value'), which of the following methods will save the changes in the collection? answer d",
    choices:["$collection->saveAll();", "$collection->saveItems();", "$collection->saveAllItems();","$collection->save();"],
    correctAnswer:["3"]
}, {
    question: "When $this->load Layout ('foo_bar_baz') is called in a standard front action, what is the effect on the layout update object instance? answer d",
    choices: ["foo_bar_baz will be the only handle added", "loadLayout() does not take any arguments, so there is no effect", "Only two handles will be added: foo_bar_baz and default", "Foo_bar_baz will be added instead of the default handle"],
    correctAnswer: ["3"]
}, {
    question: "Whic of the following block methods is the best to override when there is a need to customize how the block's html is rendered? answer a",
    choices: ["_toHtml()", "toHtml()", "setLayout()", "renderLayout()"],
    correctAnswer: ["0"]
}, {
    question:"Which kind of class is responsible for calculating te actual amount of reward points in every case? answer b",
    choices: ["Reward model (Enterprise_Model_Reward)","Action model (derivatives from Enterprise_Reward_Model_Action)", "Event model (derivatives from Enterprise_Model_Event)", "Calculation model (Enterprise_Reward_Model_Calculator)"],
    correctAnswer: ["1"]

}, {
    question: "In what order are the routers from the Magento core checked for a matching route?\n Default:Mage_Core_Controller_Varien_Route_Default\n CMS: Mage_Core_Controller_Router\n Standard: Mage_Core_Controller_Varien_Router_Standard\n Admin: Mage_Core_Controller_Varien_Router_Admin\nanswer a",
    choices: ["Admin, Standard, CMS, Default", "Default, CMS, Standard, Admin", "Admin, CMS, Standard, Default", "Standard, Admin, Default, CMS"],
    correctAnswer: ["0"]
}, {
    question: "What type of Magento class is an API resource? answer c",
    choices: ["Controller", "Helper", "Model", "Resource model"],
    correctAnswer: ["2"]
}, {
    question: "To implement a standard Adminhtml form for a custom data model, which of the following must you do? (Choose two) answer a,b",
    choices: ["Declare your module's block class prefix in the config.xml file", "Implement a sub-class of Mage_Adminhtml_Block_Widget_Form", "Implement a sub-class of Mage_Adminhtml_Block_Form_Abstract", "Create a sub-class of Mage_Admin_Block_Form_Element_Abstract for each form field to be presented", "Add a set of configuration values in the module's config-xml defining the form fields to be displayed"],
    correctAnswer: ["0", "1"]
}, {
    question: "Which statemen correctly describes order state and order status? answer b",
    choices: ["State and status are independent properties of the order", "The status is a child of the state", "State represents the general state of the order, while status workd on the item level", "An order doesn't have a status, only a state. Status is a property of an invoice, shipment, and credit memo"],
    correctAnswer: ["1"]
}, {question: "What is the difference in the effect of calling the invoice capture() method versus teh invoice pay() method? answer c",
choices: ["No difference: pay() will always call capture()", "Pay() will trigger the payment and capture() will not", "Capture() will trigger the payment and pay() will not", "The difference is determined by the payment method implementation"],
correctAnswer: ["2"]
}, {
    question: "Which one of the following statements is true regarding Mage_Core_Block_Text_List? answer c",
    choices: ["Mage_Core_Block_Text_List declares its own template for rendering, but the rendered template can be overriden via layout XML", "Child blocks of Mage_Core_Block_Text_List are always rendered alphabetically by name", "Mage_Core_Block_Text_List will always render all children automatically when it is rendered", "Mage_Core_Block_Text_List directly extends Mage_Core_Block_Template", "In order to render, the parent block of Mage_Core_Block_Text_List must always be an output block"],
    correctAnswer: ["2"]
}, {
    question: "Which of the following API calls allows you to fetch the list of related products using the native Magento API? answer a",
    choices: ["catalog_product_link.list, with arguments $type='related', $products_id", "catalog_product.list, with arguments $type='related', $product_id", "catalog_product_related.list, with argument $product_id", "catalog_product_option.list, with arguments $type='related', $product_id"],
    correctAnswer: ["0"]
}, {
    question: "Which of the following action will enable logging via calls to debugData() on a native Magento payment method model? answer d",
    choices: ["Set the protected property $_debug of the payment model to true", "Set the config node default/payment/debug/[method code] to 1", "Call Mage::register ('payment_method_debug_'.[method code], true", "Set the config node default/payment[method code]/debug to 1", "Call setDebug(true) on the payment method model"],
    correctAnswer:["3"]
}, {
    question: "Which two public methods must be implemented in a functional custom shipping method directly extending Mage_Shipping_Model_Carrier_Abstract and also implementing Mage_Shipping_Model_Carrier_Interface? (Choose two) answer a,b",
    choices: ["collectRates()", "getAllowedMethods()","isTrackingAvailable()","isFixed()", "getConfigData()","checkAvailableShipCountries()"],
    correctAnswer: ["0","1"]
}, {
    question: "Which of the following is the default setup script class name? answer d",
    choices: ["Mage_Core_Model_Mysql4_Setup","Mage_Core_Model_Resource_Setup_Default", "Mage_Setup_Model_Resource_Default", "Mage_Core_Model_Resource_Setup"],
    correctAnswer: ["3"],
}, {
    question: "You need to implement private sales utilizing Website Restrictions as provided by the Enterprise Edition of Magento, and when customers are not logged in, you want them to be redirected to a landing page. Where in the Magento admin would you find the settings needed for this task? answer b",
    choices: ["System->Confiuration->Enterprise->Website Restrictions", "System->Configuration->General->Website Restrictions","System->Manage Stores->Edit Website", "System->Permissions->Website Restrictions"],
    correctAnswer: ["1"],
}, {
    question: "Assume that PayPal has presented a new API for online purchasing that you are going to use. Which class should you extend for doing that? answer c",
    choices:["Mage_Sales_Model_Quote_Payment", "Mage_Payment_Model_Info","Mage_Payment_Model_Method_Abstract", "Mage_Sales_Model_Order_Payment"],
    correctAnswer:["2"]
}, {
    question: "To update your order information from a third-party-system using an XmlRpc call, you should _______. answer a",
    choices:["Use the native sales_orde.update /API call with teh url /api/xmlrpc/", "Create a custom API resource which allows you to receive XmlRpc requests", "Create a custom API adapte to receive XmlRpc requests", "Create a custon API handler to process XmlRpc requests"],
    correctAnswer:["0"]
}, {
    question: "Inside the XML node config/global/blocks, what is teh correct xpath for rewriting the catalog/product_view block? answer e",
    choices: ["catalog/rewrite/product/view", "catalog_product/rewrite/view", "catalog/product/rewrite/view","catalog/rewrite/product_view","catalog_product_view/rewrite"],
    correctAnswer: ["4"],
}, {
    question:"When the load method is called on an Eav-based data model, which of the following occurs before the load method returns? answer c",
    choices:["walkAttributes is used to call load on the backend model of each attribute to load its corresponding value.", "_afteLoad is called on the source model of each loaded attribute that has one", "walkAttributes is used to call afteLoad on the backend model of each loaded attribute that has one", "walkAttributes is used to iterate over each attribute and load its data from teh correct table on the database"],
    correctAnswer: ["2"],
}, {
    question: "In which of the followin integrations should you use the Magento API? answer b",
    choices: ["to send a SOAP request from Magento to a third-party-system", "to receive a SOAP request from a third-party-system to  Magento", "to send or receive SOAP requests in Magento", "to provide tracking on the order success page"],
    correctAnswer: ["1"]
}, {
    question: "You need to override the default value for the expiry calculation for reward point is used by teh Reward Points module. Which of the following XML fragements should you use in your modules config.xml? answer a",
    choices: ["default/enterprise_reward/general/expiry_calculation with a value of static", "default/enterprise_reward/general/expiry with a value of static", "default/reward_points/general/expiry_calculation with a value of static","default/enterprise_reward/expiry_calculation with a value of static"],
    correctAnswer: ["0"]
}, {
    question: "Which one of the following EAV attribute types may be used for layered navigation in native Magento? answer c",
    choices:["Varchar","Enum", "Option","Union"],
    correctAnswer: ["2"]
}, {
    question: "Which two of the following parameters are necessary to define a usable massaction item? answer a,d",
    choices: ["label","value", "additional", "url", "confirm"],
    correctAnswer: ["0","3"]

}, {
    question:"What happens when you edit an exsisting order using the order management page? answer d",
    choices: ["A form appears that allows you to edit all information on the current order", "A form appears that allows you to edit shipping information of the current order only","Depending on the order status, different editing forms appear for the current order",
    "The current order is canceled and a new order is created from scratch based on the current order's data"],
    correctAnswer:["3"],
}, {
    question: "which two of the following will return an instance of a block object? (Choose two) answer d,f",
    choices:["Mage::getBlock('page/html_header');", "Mage::app()->createBlock('page/html_header';", "Mage::createBlock('page/html_header';","Mage::app()->getLayout()->createBlock('page/html_header');","Mage::getLayout()->createBlock('page/html_header');","Mage::app()->getLayout()->createBlock('page/html_header')->setTemplate('page/html/header=phtml');"],
    correctAnswer: ["3","5"],
}, {
    question:"In which table could you find the order state? answer a",
    choices:["sales_flat_order", "sales_flat_order_state", "sales_flat_order_status","sales_flat_order_status_history"],
    correctAnswer:["0"]
}, {
    question:"Which two of the following methods can be used to loas an entity's data from its configured data table? (choose two) answer b,e",
    choices:["$entityModel->:loadEntity($id)", "$entityModel->load($attributeValue, $attributeCode)","$entityModel->loadBy($id)","$entityModel->loadEntity($attributeCode,$attributeValue)","$entityModel->load($id)"],
    correctAnswer:["1","4"]
}, {
    question:"In order to successsfully register and configure a new entity capable of being saved and loaded from the database, you must create a model and which three of the following? (choose three) answer b,e,f",
    choices: ["collection class","Cofiguration settings in your module's config-xml", "An entry in Mage::$_registry","A record in the eav_entity table", "A resource model", "A table in the database that will store the entity's data"],
    correctAnswer:["1","4","5"]
}, {
    question: "Which object never encapsulates any shopping cart items? answer b", 
    choices: ["Mage_Checkout_Model_Cart", "Mage_Sales_Model_Quote", "Mage_Sales_Model_Quote_Address</type=shipping>","Mage_Sales_Model_Quote_Address<type-billing>"],
    correctAnswer:["1"]
}, {
    question: "Which table is used for calculating a new increment ID for an order? answer b",
    choices:["sales_flat_order_increment","eav_entity_store","core_increment","core_config_data"],
    correctAnswer: ["1"]
}, {
    question: "How many items will be added to the quote after adding a configurable product to the shopping cart? answer d",
    choices: ["The number of options", "The number of options+1", "Always 1", "Always 2"],
    correctAnswer: ["3"]
}, {
    question: "Which three of the following statments accurately describe the differences between EAV and flat catalogs when accessing child categories of a category? (Chooses three) answer a,b,d",
    choices: ["A different method must be used to get the child categories if flat catalog is enabled",
    "the type of the results differs between EAV and flat catalog", "Results also include children of children if flat catalog is enabled","Results contain more information for each child if flat catalog is disabled", "The children's ID's of EAV and flat tables are different"],
    correctAnswer:["0","1","3"]
}, {
    question:"Which two of the following are supported in the native Magento API? (choose two) answer b,e",
    choices:["Partial void", "Partial invoice", "Partial capture", "Partial refund", "Partial shipment"],
    correctAnswer: ["1","4"]
}, {
    question: "Which one of the following API methods exists in Magento? answer d", 
    choices: ["catalog_category.save", "catalog_product.items","catalog_product_attribute_set.update","catalog_product.info"],
    correctAnswer: ["3"],
}, {
    question: "Which module is responsible for Store Credit functionality in the native Magento? answer b",
    choices:["Enterprise/StoreCredit","Enterprise/CustomerBalance", "Enterprise/Sales","Enterprise/Customer"],
    correctAnswer: ["1"]
}, {
    question: "You want to implement a custom attribute source model. Which method do you have to implement after extending Mage_Eav_Model_Attribute_Source_Abstract? answer b",
    choices:[:"getOptionText()","getAHOptions()","getOptionsHash()","getOptionId()"],
    correctAnswer:["1"]
}, {
    question:"Which of these xmlelements are used in system.xml to configure a system configuration propery?(choose four) answer a,c,d,f",
    choices:["backend_model","admin_model","frontend_model","source_model","source_type","show_in_store"],
    correctAnswer:["0","2","3","5"]
}, {
    question:"How is the sort order in which total models collect their values specified? answer a",
    choices: ["The sort order is specified in the admin configuration under Sales>'Checkout Totals Sort Order","The sort order is specified in the system configuration under globals/sales/quote/totals/[total_code] with <before>and <after> nodes","The sort order is defined by the module loading order as specified by the children of the modules/[module_name]/depends configuration node","The sort order is specified by the collect method in each total model"],
    correctAnswer:["0"]
}, {
    question:"Which of the following allows you to save a single attribute value on an EAV entity? answer c",
    choices:["$model->saveAttribute($attributeCode);","$model->save(SattributeCode);","$model->getResource()->saveAttribute($model, SattributeCode);","$model->getResource()->save($model, $attributeCode);"],
    correctAnswer:["2"]
}, {
    question:"Which method is called on a shipping carrier model to fetch a list of all available shipping methods, along with the rates associated with them, for a quote address? answer e",
    choices:["collectShippingRates()","getAllowedMethods()","getShippingRates()","getAvailableRates()","collectRates()"],
    correctAnswer:["4"]
}, {
    question:"Which three of the following conditions should exclude a quote item from the shipping rate calculation by a carrier model? (Choose three) answer a,b,d",
    choices:["$quoteItem->getFreeShipping() == true","$quoteltem->getProduct()->isvirtual() == true", "$quoteltem->getweight() > 0","$quoteItem->isShipSeparately() && SquoteItem->getHasChildren()","$quoteItem()->getQty() < Mage::getStoreConfig('carriers/tablerate/min_shipping_qty')"],
    correctAnswer:["0","1","3"]
}, {
    question:"What class does an adminhtml grid directly extend? answer a",
    choices:["Mage_Adminhtml_Block_Widget","Varien_Data_Grid","Varien_Data_Widget","Mage_Adminhtml_Block_Template"],
    correctAnswer:["0"]
}, {
    question: "For an attribute to be loaded on a catalog/product object, which two of the following conditions must be satisfied? answer a,c",
    choices:["The eav_attribute table must contain a row defining the attribute's properties and its entity type.","The attribute must have a backend model configured in the XML config.","The attribute must be part of the attribute set pertaining to the object being loaded.","There must be a record of the attribute on the catalog_product_super_atti:ibute table,","There must be a column added to the catalog_product_entity table."],
    correctAnswer:["0","2"]
}, {
    question:"You want to define a list of quote object attributes that are copied to the order object when an order is placed. Which one of the following statements is true? answer a",
    choices: ["You can define this list by modifying the list of elements found in the configuration with the xpath global/fieldsets/sales_convert_quote.","You can define this list by modifying the list of elements found in the configuration with the xpath","global/sales/quote/item/product_attributes.","You can define this list by checking the checkbox on the attribute edit page in the admin.","You cannot modify the list of fields copied from quote to order because the process is hardcoded."],
    correctAnswer:["0"]
}, {
    question:"Whic two EAV attribute frontend_input types make use of source models? answer c,d",
    choices:["Text","Textarea","Select","multiselect","Date","Gallery"],
    correctAnswer:["2","3"]
}, {
    question: "Which one of the following class types directly charges a credit card when you capture an invoice in Magento admin? answer d",
    choices:["order","payment","invoice","payment_method"],
    correctAnswer:["3"]
}, {
    question:"A customer has complained that his reward points sum is inaccurate. In order to debug what has happened and to discover when changes were made to his reward points, where should you look for logging information? answer a",
    choices:["Database table enterprise_reward_history","Database table enterprise_reward","Log file var/log/system.log","Database table enterprise_reward_log"],
    correctAnswer:["0"]
}, {
    question: "Which table stores information about the relationship between configurable products and their child products? answer b",
    choices: ["catalog_product_link","catalog_product_super_link","catalog_product_option","catalog_product_relation"],
    correctAnswer:["1"]
}
];