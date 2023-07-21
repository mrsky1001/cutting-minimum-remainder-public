import { c as create_ssr_component, b as compute_rest_props, g as add_attribute, d as spread, e as escape_object, f as escape_attribute_value, j as escape, v as validate_component, l as each } from "../../chunks/index.js";
import classNames from "classnames";
/* empty css                                                    */const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "caption",
    "src",
    "srcset",
    "size",
    "alignment",
    "imgClass",
    "figClass",
    "alt",
    "effect",
    "captionClass"
  ]);
  let { caption = void 0 } = $$props;
  let { src = void 0 } = $$props;
  let { srcset = void 0 } = $$props;
  let { size = "max-w-full" } = $$props;
  let { alignment = "" } = $$props;
  let { imgClass = "h-auto" } = $$props;
  let { figClass = "max-w-lg" } = $$props;
  let { alt = "" } = $$props;
  let { effect = "" } = $$props;
  let { captionClass = "mt-2 text-sm text-center text-gray-500 dark:text-gray-400" } = $$props;
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.srcset === void 0 && $$bindings.srcset && srcset !== void 0)
    $$bindings.srcset(srcset);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.figClass === void 0 && $$bindings.figClass && figClass !== void 0)
    $$bindings.figClass(figClass);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.effect === void 0 && $$bindings.effect && effect !== void 0)
    $$bindings.effect(effect);
  if ($$props.captionClass === void 0 && $$bindings.captionClass && captionClass !== void 0)
    $$bindings.captionClass(captionClass);
  return `${caption ? `<figure${add_attribute("class", figClass, 0)}><img${add_attribute("class", classNames(imgClass, size, alignment, effect, $$props.class), 0)}${add_attribute("src", src, 0)}${add_attribute("srcset", srcset, 0)}${add_attribute("alt", alt, 0)}>
    <figcaption${add_attribute("class", captionClass, 0)}><!-- HTML_TAG_START -->${caption}<!-- HTML_TAG_END --></figcaption></figure>` : `<img${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(imgClass, size, alignment, effect, $$props.class))
      },
      { src: escape_attribute_value(src) },
      { srcset: escape_attribute_value(srcset) },
      { alt: escape_attribute_value(alt) }
    ],
    {}
  )}>`}`;
});
class SizeWorkPiece {
  _a = 0;
  _b = 0;
  _c = 0;
  _d = 0;
  _h = 0;
  _leftDownAngle = 0;
  _rightDownAngle = 0;
  constructor(obj) {
    this._a = obj.a;
    this._b = obj.b ?? this._b;
    this._c = obj.c;
    this._d = obj.d ?? this._d;
    this._h = obj.h;
    this._leftDownAngle = obj.leftDownAngle ?? this._leftDownAngle;
    this._rightDownAngle = obj.rightDownAngle ?? this._rightDownAngle;
  }
  changeBothLength(length) {
    this.a = length;
    this.c = length;
  }
  get a() {
    return this._a;
  }
  set a(value) {
    this._a = Number(value);
  }
  get b() {
    return this._b;
  }
  set b(value) {
    this._b = Number(value);
  }
  get c() {
    return this._c;
  }
  set c(value) {
    this._c = Number(value);
  }
  get d() {
    return this._d;
  }
  set d(value) {
    this._d = Number(value);
  }
  get h() {
    return this._h;
  }
  set h(value) {
    this._h = Number(value);
  }
  get leftDownAngle() {
    return this._leftDownAngle;
  }
  set leftDownAngle(value) {
    this._leftDownAngle = Number(value);
  }
  get rightDownAngle() {
    return this._rightDownAngle;
  }
  set rightDownAngle(value) {
    this._rightDownAngle = Number(value);
  }
}
class WorkPiece {
  name;
  size;
  constructor(obj) {
    this.name = obj.name;
    this.size = obj.size;
  }
  get square() {
    return this.size.h * ((this.size.a + this.size.c) / 2);
  }
}
class Order {
  blank;
  _volume;
  constructor(obj) {
    this.blank = new WorkPiece(obj.blank);
    this._volume = obj.volume;
  }
  get volume() {
    return this._volume;
  }
  set volume(val) {
    this._volume = Number(val);
  }
}
const imgWorkPiece = "/_app/immutable/assets/workPiece.321ca12f.png";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { type = "text" } = $$props;
  let { required = false } = $$props;
  let { value } = $$props;
  let { onChange = void 0 } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  return `


<input${add_attribute("id", id, 0)} type="text"${add_attribute("name", id, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-[white] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${add_attribute("value", value, 0)}>`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { forName } = $$props;
  let { text } = $$props;
  if ($$props.forName === void 0 && $$bindings.forName && forName !== void 0)
    $$bindings.forName(forName);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `



<label${add_attribute("for", forName, 0)} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">${escape(text)}</label>`;
});
const Control = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { type = "text" } = $$props;
  let { required = false } = $$props;
  let { value } = $$props;
  let { onChange = void 0 } = $$props;
  let { label = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



${validate_component(Label, "Label").$$render($$result, { forName: id, text: label }, {}, {})}
${validate_component(Input, "Input").$$render(
      $$result,
      {
        id,
        type,
        placeholder,
        required,
        onChange,
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
let widthRawPiece = 0.2;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allowanceSawing = 0;
  let rawWorkPiece = new WorkPiece({
    name: "Основная",
    size: new SizeWorkPiece({ a: 8, c: 8, h: widthRawPiece })
  });
  let listOrders = [
    new Order({
      blank: new WorkPiece({
        name: "Деталь 2м",
        size: new SizeWorkPiece({ a: 2, c: 2, h: widthRawPiece })
      }),
      volume: 20
    }),
    new Order({
      blank: new WorkPiece({
        name: "Деталь 3м",
        size: new SizeWorkPiece({ a: 3, c: 3, h: widthRawPiece })
      }),
      volume: 15
    }),
    new Order({
      blank: new WorkPiece({
        name: "Деталь 5м",
        size: new SizeWorkPiece({ a: 5, c: 5, h: widthRawPiece })
      }),
      volume: 30
    })
  ];
  let log = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



<div class="w-full px-4 mx-auto max-w-8xl"><div class="lg:flex"><main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"><div class="flex w-full"><div class="flex-auto max-w-8xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16"><section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-2xl lg:py-16"><h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Параметры исходной заготовки для распила</h2>
                            <form action="#"><div class="grid gap-4 sm:grid-cols-2 sm:gap-6"><div class="sm:col-span-2">${validate_component(Control, "Control").$$render(
      $$result,
      {
        label: "Имя",
        id: "nameWorkPiece",
        type: "text",
        placeholder: "Имя исходной заготовки...",
        required: true,
        value: rawWorkPiece.name
      },
      {
        value: ($$value) => {
          rawWorkPiece.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
                                    <div class="w-full">${validate_component(Control, "Control").$$render(
      $$result,
      {
        label: "Длина (a), м.",
        id: "lengthRawPiece",
        type: "number",
        placeholder: "Длина исходной заготовки(в метрах)...",
        value: rawWorkPiece.size.a,
        onChange: (val) => rawWorkPiece.size.changeBothLength(val),
        required: true
      },
      {},
      {}
    )}</div>
                                    <div class="w-full">${validate_component(Control, "Control").$$render(
      $$result,
      {
        label: "Ширина (h), м.",
        id: "widthRawPiece",
        type: "number",
        placeholder: "Ширина исходной заготовки (в метрах)...",
        required: true,
        value: rawWorkPiece.size.h
      },
      {
        value: ($$value) => {
          rawWorkPiece.size.h = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
                                    <div class="w-full">${validate_component(Control, "Control").$$render(
      $$result,
      {
        label: "Припуск, м.",
        id: "allowanceSawing",
        type: "number",
        placeholder: "Припуск при распиле (в метрах)...",
        required: true,
        value: allowanceSawing
      },
      {
        value: ($$value) => {
          allowanceSawing = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></form></div></section>
                    ${validate_component(Img, "Img").$$render(
      $$result,
      {
        src: imgWorkPiece,
        class: "max-h-72 m-auto"
      },
      {},
      {}
    )}
                    <div class="relative overflow-x-auto"><button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center float-right text-white bg-primary-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-700">Запустить расчет
                        </button></div>
                    <div class="relative overflow-x-auto"><h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Список требуемых деталей из заказа</h2>
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400"><thead class="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-400"><tr><th scope="col" class="px-6 py-3">№</th>
                                    <th scope="col" class="px-6 py-3">Имя</th>
                                    <th scope="col" class="px-6 py-3">Длина верхнего основания (a), м.</th>
                                    <th scope="col" class="px-6 py-3">Длина нижнего основания (c), м.</th>
                                    <th scope="col" class="px-6 py-3">Количество, шт.</th></tr></thead>
                            <tbody>${each(listOrders, (order, idx) => {
      return `<tr class="bg-white border-b dark:bg-gray-700 dark:border-gray-600 hover:bg-[gray]/5 dark:hover:bg-gray-600"><th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${escape(idx + 1)}</th>
                                        <td class="px-6 py-4">${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "text",
          id: "namePiece",
          placeholder: "Наименования детали...",
          value: order.blank.name
        },
        {
          value: ($$value) => {
            order.blank.name = $$value;
            $$settled = false;
          }
        },
        {}
      )}</td>
                                        <td class="px-6 py-4">${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "number",
          id: "lengthAPiece",
          placeholder: "Длина верхнего основания детали...",
          value: order.blank.size.a
        },
        {
          value: ($$value) => {
            order.blank.size.a = $$value;
            $$settled = false;
          }
        },
        {}
      )}</td>
                                        <td class="px-6 py-4">${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "number",
          id: "lengthCPiece",
          placeholder: "Длина нижнего основания детали...",
          value: order.blank.size.c
        },
        {
          value: ($$value) => {
            order.blank.size.c = $$value;
            $$settled = false;
          }
        },
        {}
      )}</td>
                                        <td class="px-6 py-4">${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "number",
          id: "volumePiece",
          placeholder: "Количество деталей данного типа...",
          value: order.volume
        },
        {
          value: ($$value) => {
            order.volume = $$value;
            $$settled = false;
          }
        },
        {}
      )}</td>
                                    </tr>`;
    })}</tbody></table>

                        <button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center float-right text-white bg-primary-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-700">+ Добавить деталь
                        </button></div>
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Результаты вычислений</h2>

                    <div id="log" contenteditable="true">${(($$value) => $$value === void 0 ? `` : $$value)(log)}</div></div></div></main></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
