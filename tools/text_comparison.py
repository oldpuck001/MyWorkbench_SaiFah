# text_comparison.py

def text_comparison(request):

    text_1 = request.get('data', {}).get('text_1', '')
    text_2 = request.get('data', {}).get('text_2', '')

    text_1_list = text_1.strip().split('\n')
    text_2_list = text_2.strip().split('\n')

    max_len = max(len(text_1_list), len(text_2_list))
    differences = []

    for i in range(max_len):
        text1 = text_1_list[i] if i < len(text_1_list) else ''
        text2 = text_2_list[i] if i < len(text_2_list) else ''
        if text1 != text2:
            differences.append({
                'Paragraph': i + 1,
                'Text1': text1,
                'Text2': text2
            })

    if differences:

        text = f'发现 {len(differences)} 处段落不同：\n\n'

        for diff in differences:

            text += f'第 {diff['Paragraph']} 段：\n'
            text += f'  Text 1: {diff['Text1']}\n'
            text += f'  Text 2: {diff['Text2']}\n'
            text += '\n'

        result_text = {'result_message': text}
        return ['text_comparison', result_text]

    else:

        result_text = {'result_message': '两个文本内容一致。'}
        return ['text_comparison', result_text]