# backend.py

import sys
import json

from tools import modifythefilename
from tools import character
from tools import image
from tools import export
from tools import sort
from tools import collect_file
from tools import copy_folder
from tools import text_comparison
from tools import docx_comparison

def main():
    
    # 從標準輸入讀取數據
    input_data = sys.stdin.read()

    # 將數據轉換為 Python 對象
    request = json.loads(input_data)

    # 處理數據
    # 文件操作工具
    if request["command"] == "filename_modify":
        result = modifythefilename.modify(request)
    elif request["command"] == "filename_character":
        result = character.character(request)
    elif request["command"] == "filename_image":
        result = image.image(request)
    elif request["command"] == "filename_export":
        result = export.export(request)
    elif request["command"] == "filename_sort":
        result = sort.sort(request)
    elif request["command"] == "collect_file":
        result = collect_file.collect_file(request)
    elif request["command"] == "copy_folder":
        result = copy_folder.copy_folder(request)
    # 文本对比工具
    elif request["command"] == "text_comparison":
        result = text_comparison.text_comparison(request)
    elif request["command"] == "docx_comparison":
        result = docx_comparison.compare_word_documents(request)

    else:
        result = "Unknown command"

    # 返回結果
    response = {"result": result}
    print(json.dumps(response))
    sys.stdout.flush()

if __name__ == "__main__":
    main()