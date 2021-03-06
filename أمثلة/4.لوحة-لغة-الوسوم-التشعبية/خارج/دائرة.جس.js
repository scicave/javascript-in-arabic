

// ############ -----------------------------------------
// ############ -----------------------------------------
// THE ORIGINAL TRANSLATED CODE -------------------------

import { ليس_رقما } from "./مساعدات.جس";
export const لوحتي = مستند.محدد_الاستعلام(".لوحة");
;
export const سياق = لوحتي.احضر_السياق("2d");
;
export default 
class دائرة {
  #قيم_إجبارية_رقمية = ["س", "ص", "نق", "ك", ];
  __ع = {س: 0, ص: 0, };
  constructor(إعدادات) {
    for (var خ of this.#قيم_إجبارية_رقمية) if (    ليس_رقما(إعدادات[خ])) this.#اقذف_خطأ_إعداد(خ);
    كائن.عين(this, إعدادات);
  }

  get ع() { return  this.__ع;  }
  set ع(قيمة) {
    ليس_رقما(قيمة.س) && this.#اقذف_خطأ_إعداد("ع.س");
    ليس_رقما(قيمة.ص) && this.#اقذف_خطأ_إعداد("ع.ص");
    this.__ع = قيمة;
  }

  #اقذف_خطأ_إعداد(اسم_الإعداد) {
    throw  new خطأ("قيمة غير متوقعة لـ \"" + اسم_الإعداد + "\" الخاصة بالدائرة");
  }

  تحديث() {
    this.س += this.ع.س;
    this.ص += this.ع.ص;
  }

  ارسم() {
    let _س = this.س,
        _ص = this.ص,
        _نق = this.نق;
    سياق.ابدأ_مسار();
    this.رسم && (كائن.عين(سياق, this.رسم));
    سياق.إهليج(_س, _ص, _نق, _نق, 0, 0, 2 * رياضيات.ط);
    !this.جوفاء && (سياق.املئ(), true) || سياق.خطط();
  }


}

;
