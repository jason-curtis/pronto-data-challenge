import os
import petl


os.mkdir('json')

for root, subdirs, files in os.walk('raw'):
    for file_ in files:
        if file_.endswith('.csv'):
            print('converting', file_)
            full_source_path = os.path.join(root, file_)
            target_filename = full_source_path[:-4] + '.json'
            petl.fromcsv(full_source_path).tojson(target_filename)
