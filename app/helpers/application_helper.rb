module ApplicationHelper
  def max(a, b)
    a > b ? a : b
  end

  def ellipsisize(text, len = 20)
    return nil unless text

    text = text.to_s
    text&.truncate(len, omission: "...#{text.last(10)}")
  end

  def coalesce(value, ret = '-')
    value.nil? ? ret : value
  end

  def bootstrap_class_for(flash_type)
    {
      success: 'alert-success',
      error: 'alert-danger',
      alert: 'alert-danger text-error',
      warning: 'alert-warning',
      notice: 'alert-success'
    }[flash_type.to_sym]
  end

  def render_fields(f, association, key, value)
    new_object = f.object.send(association).klass.new
    id = new_object.object_id
    f.fields_for(association, new_object, child_index: id) do |builder|
      render("#{association.to_s.singularize}_fields", f: builder, removable: true, key: key, value: value)
    end
  end

  def remove_underscore(text)
    text&.gsub('_', ' ')&.gsub('\bor', '/')
  end

  def show_datetime(datetime, offset = nil)
    datetime += offset.hours unless offset.nil?
    datetime&.strftime('%Y-%m-%d %I:%M %p')
  end

  def show_time(datetime, offset = nil)
    datetime += offset.hours unless offset.nil?
    datetime&.strftime('%I:%M %p')
  end

  def show_chat_datetime(datetime, offset = nil)
    datetime += offset.hours unless offset.nil?
    datetime&.strftime('%Y-%m-%d, %I:%M %p')
  end

  def show_uploaded_image(image, object, picture, style = 'img-size')
    if image.present? && object.present?
      if object.errors[picture].any?
        image_tag('', class: style, hidden: true)
      else
        image_tag(image, class: style)
      end
    else
      image_tag('', class: style, hidden: true)
    end
  end

  def render_activation_checkbox(object)
    output = ''
    output += if object.active?
                "<i class='mdi mdi-check-circle mdi-18px'></i>"
              else
                "<i class='mdi mdi-checkbox-blank-circle-outline mdi-18px'></i>"
              end
    output.html_safe
  end

  def render_checkbox(value)
    return if value.nil?

    output = ''
    output += if value.eql? true
                "<i class='mdi mdi-check-circle mdi-18px'></i>"
              else
                "<i class='mdi mdi-checkbox-blank-circle-outline mdi-18px'></i>"
              end
    output.html_safe
  end

  def render_active_deactivated_badge(object)
    output = ''
    output += if object.active?
                "<span class='badge badge-success'>Active</span>"
              else
                "<span class='badge badge-danger'>Deactivated</span>"
              end

    output.html_safe
  end

  def render_status(object)
    output = ''
    if object.Drafted?
      output += "<span class='badge badge-secondary'>DRAFTED</span>"
    elsif object.Published?
      output += "<span class='badge badge-primary'>PUBLISHED</span>"
    elsif object.Archived?
      output += "<span class='badge badge-danger'>ARCHIVED</span>"
    end
    output.html_safe
  end

end
