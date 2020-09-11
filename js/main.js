$(document).ready(function() {
    initSummaryPrice();
    initShoppingClearSoppingCart();
    initPlanSetProduct();
});

function initPlanSetProduct()
{
    var attrHolderSelector = '.specAttrHolder';
    var condition = $(attrHolderSelector).size()
        // && false
    ;init(condition);

    function init(condition)
    {
        if(condition)
        {
            setup();
        }
    }

    function setup()
    {
        $(attrHolderSelector + " .specAttrOptionHolder").on('click', function()
        {
            var id = $(this).data('attr_option_id');
            var name = $(this).data('attr_option_name');
            $('.realAttrsHolder [value="' + id + '"]').closest('select').val(id).closest('form').trigger('change');
            $(this).closest('.specAttrHolder').find('.selectedOption').html(name);
        });

        $('.specAttrHolder').each(function()
        {
            var name = $(this).data('name');
            if(name == 'Plan Set Options' || name == 'Foundation Options')
            {
                $(this).find('.specAttrOptionHolder:eq(0)').click();
            }
        });
    }
}

function initShoppingClearSoppingCart(){
    var condition = $('.productAttributesForm').size()
        // && false
    ;init(condition);

    function init(condition)
    {
        if(condition || condition == null)
        {
            setupAddToCartWithoutReload();

            $(document).on('click', '.addToCartBTN', function() {
                if(!$('.cartSummary.empty1').length) {
                    var _link = $('.shoppingCartUrl').attr('href');

                    $.ajax({
                        url: _link,
                        success: function(data){
                            var requiredObject =  $('div.clearCartHolder', data);
                            $('.clearCart').attr('onclick',requiredObject.find('a#catshopclear').attr('onclick').replace('ClearCart','CMS.OrderRetrievev2.ServerSideDrawCartEmpty'));
                            $('.clearCart').trigger('click');
                            $('.addToCartInputHolder .productSubmitInput').trigger('click');
                        }
                    });

                } else {
                    $('.addToCartInputHolder .productSubmitInput').trigger('click');
                }

                return false;
            });

        }
    }

    function setupAddToCartWithoutReload()
    {
        window.AddToCart = function(n)
        {
            var _catalogueId = arguments[0];
            var _productId = arguments[1];
            var _targetFrame = arguments[2];
            var _templateTypeID = arguments[3];
            var _templateName = '';
            var _templateHash = '';
            var E = false;
            var s = undefined;
            if (arguments.length > 6) {
                _templateName = arguments[4];
                _templateHash = arguments[5];
                E = arguments[6];
                s = arguments.length == 8 ? arguments[7] : undefined
            } else {
                E = arguments[4];
                s = arguments.length == 6 ? arguments[5] : undefined
            }

            var _relatedProductIds = '';
            var DomUnits_ = document.getElementById('Units_' + _productId);
            var _cartId = readCookie('CartID');
            var DomGrouping_ = document.getElementById('Grouping_' + _productId);
            var DomRelated_ = document.getElementById('Related_' + _productId);
            var DomCatProdTd_ = document.getElementById('catProdTd_' + _productId);
            var DomCatProdAttributes_ = document.getElementById('catProdAttributes_' + _productId);
            var DomCatProdAttributes2_ = document.getElementById('catProdAttributes2_' + _productId);
            var DomCatProdInstructions_ = document.getElementById('catProdInstructions_' + _productId);
            var _instructions = '';
            var _attributeIDs = new Array();
            var _vertical = false;
            var _isQuote = false;
            var _units;
            var responseAddedToCartProductQuantity = 0;
            var DomCartSummary_;
            var _v2 = true;
            var _cartSummaryTemplateName = null;
            var _cartSummaryTemplateHash = null;
            if (DomUnits_) {
                _units = DomUnits_.value;
                if (_units < 0) {
                    alert(Oshoplang.RemoveError);
                    return false
                }
            } else {
                _units = 1
            }
            if (_cartId == null || _cartId == '') {
                _cartId = - 1
            }
            DomCartSummary_ = document.getElementById('catCartSummary');
            if (DomGrouping_) {
                if (DomGrouping_.nodeName == 'SELECT') {
                    _productId = DomGrouping_.value
                } else {
                    var f = DomGrouping_.getElementsByTagName('input');
                    for (var i = 0; i < f.length; i++) {
                        if (f[i].checked) {
                            _productId = f[i].value;
                            break
                        }
                    }
                }
            }
            if (DomRelated_) {
                _relatedProductIds = GetCheckListValue(DomRelated_);
                if (_relatedProductIds.length > 0) {
                    responseAddedToCartProductQuantity = _relatedProductIds.split(',').length
                }
            }
            if (DomCatProdInstructions_)
            {
                _instructions = DomCatProdInstructions_.value
            }
            if (DomCatProdAttributes_)
            {
                var DomCatProdAttributes_Select = DomCatProdAttributes_.getElementsByTagName('select');
                if (DomCatProdAttributes_Select) {
                    if (_instructions.length > 0) {
                        _instructions += ';'
                    }
                    for (var i = 0; i < DomCatProdAttributes_Select.length; i++) {
                        if (DomCatProdAttributes_Select[i].value.length > 0) {
                            _instructions += DomCatProdAttributes_Select[i].value + ';'
                        }
                    }
                }
            }
            if (DomCatProdAttributes2_)
            {
                var h = 0;
                var DomCatProdAttributes2_Select = DomCatProdAttributes2_.getElementsByTagName('select');
                var G;
                var Attr2IsChoosen;
                var e = '';
                if (DomCatProdAttributes2_Select) {
                    for (var i = 0; i < DomCatProdAttributes2_Select.length; i++) {
                        if (DomCatProdAttributes2_Select[i].value.length > 0) {
                            _attributeIDs[h] = DomCatProdAttributes2_Select[i].value + '|1';
                            h++
                        } else {
                            if (DomCatProdAttributes2_Select[i].getAttribute('mandatory')) {
                                alert(Oshoplang.ChooseAttribute);
                                return;
                            }
                        }
                    }
                }
                var DomCatProdAttributes2_Input = DomCatProdAttributes2_.getElementsByTagName('input');
                if (DomCatProdAttributes2_Input) {
                    for (var i = 0; i < DomCatProdAttributes2_Input.length; i++) {
                        if (DomCatProdAttributes2_Input[i].type == 'checkbox' || DomCatProdAttributes2_Input[i].type == 'radio')
                        {
                            if (e != DomCatProdAttributes2_Input[i].getAttribute('name')) {
                                if (i > 0 && !Attr2IsChoosen && DomCatProdAttributes2_Input[i - 1].getAttribute('mandatory')) {
                                    alert(Oshoplang.ChooseAttribute);
                                    return;
                                }
                                Attr2IsChoosen = false
                            }
                            if (DomCatProdAttributes2_Input[i].checked) {
                                _attributeIDs[h] = DomCatProdAttributes2_Input[i].id + '|1';
                                h++;
                                Attr2IsChoosen = true
                            }
                            e = DomCatProdAttributes2_Input[i].getAttribute('name')
                        }
                        else
                        {
                            if (DomCatProdAttributes2_Input[i].value.length > 0) {
                                _attributeIDs[h] = DomCatProdAttributes2_Input[i].id + '|' + DomCatProdAttributes2_Input[i].value;
                                h++;
                                Attr2IsChoosen = true
                            } else {
                                if (DomCatProdAttributes2_Input[i].getAttribute('mandatory')) {
                                    alert(Oshoplang.ChooseAttribute);
                                    return
                                }
                            }
                        }
                    }
                    if (
                        DomCatProdAttributes2_Input.length > 0 &&
                        (
                            DomCatProdAttributes2_Input[DomCatProdAttributes2_Input.length - 1].type == 'checkbox' ||
                            DomCatProdAttributes2_Input[DomCatProdAttributes2_Input.length - 1].type == 'radio'
                        )
                    )
                    {
                        if (!Attr2IsChoosen && DomCatProdAttributes2_Input[i - 1].getAttribute('mandatory')) {
                            alert(Oshoplang.ChooseAttribute);
                            return
                        }
                    }
                }
            }
            if (s && s.selectedOptions) {
                for (var i = 0; i < s.selectedOptions.length; i++) {
                    _attributeIDs.push(s.selectedOptions[i] + '|1')
                }
            }
            if (DomCartSummary_) {
                if (DomCartSummary_.tagName.toLowerCase() == 'span') {
                    if (DomCartSummary_.getAttribute('Vertical') == 'True') {
                        _vertical = true
                    }
                    if (DomCartSummary_.getAttribute('Quote') == 'True') {
                        _isQuote = true
                    }
                    _cartSummaryTemplateName = DomCartSummary_.getAttribute('_v2');
                    _cartSummaryTemplateHash = DomCartSummary_.getAttribute('templatehash')
                } else {
                    if (DomCartSummary_.tagName.toLowerCase() == 'div') {
                        if (DomCartSummary_.getAttribute('data-vertical') == 'True') {
                            _vertical = true
                        }
                        if (DomCartSummary_.getAttribute('data-quote') == 'True') {
                            _isQuote = true
                        }
                        _cartSummaryTemplateName = DomCartSummary_.getAttribute('data-templateName');
                        _cartSummaryTemplateHash = DomCartSummary_.getAttribute('data-templatehash')
                    }
                }
            }

            var CART_ID_INDEX           = 0,
                RESPONSE_CODE_INDEX     = 1,
                CART_SUMMARY_HTML_INDEX = 2,
                PRODUCT_HTML_INDEX      = 3,
                ADDED_QUANTITY_INDEX    = 4;

            var response = CMS.CatalogueRetrieve.ServerSideAddItemToOrder(
                _cartId,
                _catalogueId,
                _productId,
                _units,
                _relatedProductIds,
                _attributeIDs,
                _instructions,
                _vertical,
                _templateTypeID,
                _isQuote,
                _targetFrame,
                _v2,
                _templateName,
                _templateHash,
                _cartSummaryTemplateName,
                _cartSummaryTemplateHash);

            if (response.value[ADDED_QUANTITY_INDEX]) {
                responseAddedToCartProductQuantity = response.value[ADDED_QUANTITY_INDEX]
            }
            if (s && s.skipRefreshAfter) {
                return response.value[RESPONSE_CODE_INDEX]
            }
            if (DomCartSummary_) {
                DomCartSummary_.innerHTML = response.value[CART_SUMMARY_HTML_INDEX]
            }
            switch (response.value[RESPONSE_CODE_INDEX]) {
                case 0:
                    if (!E) {
                        if (DomCatProdTd_) {
                            //DomCatProdTd_.innerHTML = response.value[PRODUCT_HTML_INDEX];
                            //ProcessJS(DomCatProdTd_)
                        }
                        alert(responseAddedToCartProductQuantity + Oshoplang.Added)
                    } else {
                        document.location = '/OrderRetrievev2.aspx?CatalogueID=' + _catalogueId
                    }
                    break;
                case 1:
                    alert(Oshoplang.OutOfStock);
                    break;
                case 2:
                    if (!E)
                    {
                        if (DomCatProdTd_)
                        {
                            //DomCatProdTd_.innerHTML = response.value[PRODUCT_HTML_INDEX];
                            //ProcessJS(DomCatProdTd_)
                        }
                        alert(responseAddedToCartProductQuantity + Oshoplang.PreOrder)
                    }
                    else
                    {
                        document.location = '/OrderRetrievev2.aspx?CatalogueID=' + _catalogueId
                    }
                    break;
                case 3:
                    alert(Oshoplang.MinLimit);
                    break;
                case 4:
                    alert(Oshoplang.MaxLimit);
                    break;
                case 6:
                    alert(Oshoplang.ChooseAttribute);
                    break
            }
            initSocialMediaModules();
            if (typeof AddProductExtras == 'function')
            {
                AddProductExtras(_catalogueId, _productId, response.value[RESPONSE_CODE_INDEX])
            }
        }
    }
}

function initSummaryPrice() {
    var condition = $('.summaryPrice').size()
        // && false
        ;init(condition);

    function init(condition) {
        if(condition || condition == null) {

            setTimeout(function()
            {
                if($('.productAttributes').data('enabled') != true)
                {
                    summaryPrice();
                    initPlanSetProduct();
                    $('.productAttributes').data('enabled', true);
                }

                initSummaryPrice();
            }, 40);

        }
    }

    function summaryPrice() {
        var attrObj = $('.attrInfoHolder').html();

        attrObj = $.parseJSON(attrObj);

        var currency = '';
        var defaultPrice = $('.summaryPrice').html().replace(/^.*?([^\d](\d+(\.\d+)?))?$/gi, '$2');

        defaultPrice = defaultPrice.replace(',', '');

        var form = $('.productAttributesForm');

        var selector = '.productLarge';

        $(document).off('change',form ).on('change', form, function()
        {
            var _this = form;
            var _input = _this.find('.productAttributes input[type="radio"]');

            var _select = _this.find('.productAttributes select');
            var priceCount = +defaultPrice;

            var quantity = $('[name="AddToCart_Amount"]').eq(0).val();

            if(_input.length)
            {
                _input.each(function()
                {
                    var _tInput = $(this);

                    if(attrObj['options'][_tInput.attr('id')] == null)
                    {
                        return;
                    }

                    if(_tInput.prop('checked'))
                    {
                        var _tInputPrice = attrObj['options'][_tInput.attr('id')]['price'];

                        priceCount += _tInputPrice;
                    }
                });
            }

            if(_select.length)
            {
                _select.each(function()
                {
                    var _tSelect = $(this);
                    var _tSVal = _tSelect.val();

                    if(_tSVal.length > 0)
                    {
                        if(attrObj['options'][_tSVal] == null)
                        {
                            return;
                        }
                        var _tSelectPrice = attrObj['options'][_tSVal]['price'];

                        priceCount += _tSelectPrice;
                    }
                });
            }

            priceCount = (Math.round(priceCount*100) * quantity) / 100;

            if ((priceCount+"").indexOf(".")  > 0)
            {
                priceCount = priceCount+'';

                priceCount = priceCount.split('.');
                var priceCount1 = priceCount[0];
                var priceCount2 = +priceCount[1];

                if(priceCount2 < 10)
                {
                    priceCount2 = priceCount2 + '0';
                }
            }
            else {
                var priceCount1 = priceCount;
                var priceCount2 = '00';
            }


            $('.summaryPrice').each(function()
            {
                $(this).html(currency + priceCount1 + '.' + priceCount2);
            });
        });
    }
}
