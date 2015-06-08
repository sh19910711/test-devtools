# send request
request = (method, url, callback)->
  xhr = new XMLHttpRequest()

  xhr.open(method, url, true)
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
  xhr.send()

  xhr.onreadystatechange = ->
    if (xhr.readyState == 4)
      callback(xhr)

window.request = request
