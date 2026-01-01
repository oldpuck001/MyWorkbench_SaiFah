# backend.py

import sys
import json

from file_tools import modifythefilename
from file_tools import character
from file_tools import image
from file_tools import export
from file_tools import sort
from file_tools import collect_file
from file_tools import copy_folder

from xlsx_tools import regex

from audit_tools import select_folder
from audit_tools import set_up
from audit_tools import import_account_balance_sheet
from audit_tools import import_chronological_account

from other_tools import find_subset
from other_tools import text_comparison
from other_tools import docx_comparison
from other_tools import xlsx_comparison
from other_tools import bank_statement_sort

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


    # 电子表格工具
    if request['command'] == "regex_import":
        result = regex.select_file(request)
    elif request['command'] == "regex_index":
        result = regex.road_sheet(request)
    elif request['command'] == "regex_generate":
        result = regex.regex_generate(request)


    # 审计辅助工具
    elif request["command"] == "select_folder_path":
        result = select_folder.select_folder_path(request)

    elif request["command"] == "import_config":
        result = set_up.import_config(request)
    elif request['command'] == 'select_basic_file':
        result =set_up.select_basic_file(request)
    elif request["command"] == "import_basic":
        result = set_up.import_basic(request)
    elif request["command"] == "save_settings":
        result = set_up.save_settings(request)

    elif request["command"] == "import_account_balance_sheet":
        result = import_account_balance_sheet.import_account_balance_sheet(request)
    elif request["command"] == "index_account_balance_sheet":
        result = import_account_balance_sheet.index_account_balance_sheet(request)
    elif request["command"] == "export_account_balance_sheet":
        result = import_account_balance_sheet.export_account_balance_sheet(request)

    elif request["command"] == "import_chronological_account":
        result = import_chronological_account.import_chronological_account(request)
    elif request["command"] == "index_chronological_account":
        result = import_chronological_account.index_chronological_account(request)
    elif request["command"] == "export_chronological_account":
        result = import_chronological_account.export_chronological_account(request)


    # 其他辅助工具
    elif request["command"] == "find_subset_sheetnames_import":
        result = find_subset.find_subset_sheetnames_import(request)
    elif request["command"] == "find_subset_columns_index":
        result = find_subset.find_subset_columns_index(request)
    elif request["command"] == "find_subset_import":
        result = find_subset.find_subset_import(request)
    elif request["command"] == "find_subset_export":
        result = find_subset.find_subset_export(request)

    elif request["command"] == "text_comparison":
        result = text_comparison.text_comparison(request)
    elif request["command"] == "docx_comparison":
        result = docx_comparison.compare_word_documents(request)
    elif request["command"] == "xlsx_comparision_sheetnames":
        result = xlsx_comparison.xlsx_comparision_sheetnames(request)
    elif request["command"] == "xlsx_comparison":
        result = xlsx_comparison.compare_excels(request)

    elif request["command"] == "bank_statement_sort_import":
        result = bank_statement_sort.bank_statement_sort_import(request)
    elif request["command"] == "bank_statement_sort_index":
        result = bank_statement_sort.bank_statement_sort_index(request)
    elif request["command"] == "bank_statement_sort_debit_or_credit":
        result = bank_statement_sort.bank_statement_sort_debit_or_credit(request)
    elif request["command"] == "bank_statement_sort_export":
        result = bank_statement_sort.bank_statement_sort_export(request)

    else:
        result = "Unknown command"

    # 返回結果
    response = {"result": result}
    print(json.dumps(response))
    sys.stdout.flush()

if __name__ == "__main__":
    main()