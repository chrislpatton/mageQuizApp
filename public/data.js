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
}
];